import express from "express";
import cors from "cors";
import * as user from "./database.js";
import * as available from "./availability.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import cookieParser from "cookie-parser";
import nodemailer from "nodemailer";

const port = 5000;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: [
      "set-cookie",
      "Content-Type",
      "Access-Control-Allow-Origin",
      "Access-Control-Allow-Credentials",
    ],
  })
);

app.post("/sendEmail", (req, res) => {

  // send email with SMTP mailtrap app
  // Create a transport object
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "986c14b67aa07c",
      pass: "520cf936030044",
    },
  });

  // verify connection to mailtrap
  transport.verify(function (error) {
    if (error) {
      console.log("Connection error:", error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // create email data from Contact Form on Contact Page
  const mailOptions = {
    from: req.body.email,
    to: "realm@email.com",
    subject: "Contact Form",
    text: req.body.message,
  };

  // Send email. Will display results in Mailtrap inbox
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return res.status(201).json();
});

app.post("/sendConfirmation", (req, res) => {

  // send email with SMTP mailtrap app
  // Create a transport object
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "986c14b67aa07c",
      pass: "520cf936030044",
    },
  });

  // verify connection to mailtrap
  transport.verify(function (error) {
    if (error) {
      console.log("Connection error:", error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  // create email data from Contact Form on Contact Page
  const mailOptions = {
    from:"realm@email.com",
    to: req.body.email,
    subject: "Appointment Confirmation",
    text: `Your appointment is set for ${req.body.date} at ${req.body.time}`,
  };

  // Send email. Will display results in Mailtrap inbox
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  return res.status(201).json();
});

app.post("/createUser", (req, res) => {
  user
    .createUser(
      req.body._id,
      req.body.firstName,
      req.body.lastName,
      req.body.phone,
      req.body.password
    )
    .then((user) => {
      let id = req.body._id;
      let password = req.body.password;
      return authorize(res, id, password, user);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        error:
          "The document was not able to be compiled, check parameters again.",
      });
    });
});

// token base authentication: better for REST due to stateless quality
// more scalable. The 5 steps are :
//      1. The user enters credentials
//      2. Request processed here on the server
//      3. Access token submitted to browser
//      4. Proper token storage
//      5. Set a timeout
app.post("/checkUser", (req, res) => {
  user
    .checkUser(req.body._id)
    .then((user) => {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          console.error("Something went horribly wrong! ", err);
          throw err;
        }
        console.log(result)
        if (result == 'true') {
          let id = req.body._id;
          let password = user.password;
          return authorize(res, id, password, user);
        } else if (result == 'false') {
          res.status(401).json(user);
        }
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        error: "Wrong Password! Try again.",
      });
    });
});

const authorize = async (res, id, password, user) => {
  const authToken = jsonwebtoken.sign({ id, password }, "SECRET_KEY");

  await res.cookie("authToken", authToken, {
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  return await res.send({ authToken, user });
};

app.get("/autoLogin", (req, res) => {
  const cookie = req.cookies.authToken;

  // if we received no cookies then user needs to login.
  if (!cookie) {
    return res.sendStatus(401);
  }
  try {
    let results = jsonwebtoken.verify(cookie, "SECRET_KEY");

    return res.send({ id: results.id });
  } catch {
    return res.sendStatus(401);
  }
});

// app.put("/updateUser/:appointment", (req, res) => {
//   user
//     .updateUser(
//       req.body.id,
//       req.body?.firstName,
//       req.body?.lastName,
//       req.body?.phone,
//       req.body?.password,
//       req.body?.appointment
//     )
//     .then((user) => {
//       res.status(200).json(user);
//     })
//     .catch((error) => {
//       console.log(error);
//       res.status(400).json({
//         error: "Could not update user.",
//       });
//     });
// });

app.put("/updateUser", (req, res) => {
  console.log(req.body)
  user
    .updateUser(
      req.body._id,
      req.body?.firstName,
      req.body?.lastName,
      req.body?.phone,
      req.body?.password,
      req.body?.appointment
    )
    .then((user) => {
      console.log(user)
      res.status(200).json(user);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        error: "Could not update user.",
      });
    });
});

app.get("/retrieveUsersId/:id", (req, res) => {
  user
    .retrieveUsersId(req.params.id)
    .then((user) => {
      if (user !== null) {
        res.json(user);
      } else {
        res.status(404).json({
          Error: "The resource you are trying to locate does not exist.",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        Error:
          "The document was not able to be compiled, check parameters again.",
      });
    });
});

// this path will be used to check if the cookie is valid to auto login inside the application;
app.get("/logout", (req, res) => {
  res.clearCookie("authToken");
  return res.sendStatus(200);
});

app.post("/createAppointment", (req, res) => {
  available
    .createAppointment(
      req.body._id,
      req.body.service,
      req.body.date,
      req.body.description,
      req.body.time
    )
    .then((available) => {
      res.status(201).json(available);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        error: "Could not make an appointment.",
      });
    });
});

app.delete("/deleteAppointmentId/:id", (req, res) => {
  available
    .deleteAppointment(req.params.id)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        res.status(204).send();
      } else {
        res
          .status(404)
          .json({
            Error: "The resource you are trying to locate does not exist.",
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res
        .status(400)
        .json({
          Error:
            "Document was not able to be compiled, check parameters again.",
        });
    });
});

app.put("/updateAvailability/:appointment", (req) => {
  console.log(req.body);
  // available
  // .updateAppointment(
  // req.body.id,
  // req.body?.firstName,
  // req.body?.lastName,
  // req.body?.phone,
  // req.body?.password,
  // req.body?.appointment,
  // )
  // .then((available) => {
  //   res.status(200).json(available);
  // })
  // .catch((error) => {
  //   console.log(error);
  //   res
  //     .status(400)
  //     .json({
  //       error:
  //         "Could not update appointment.",
  //     });
  // });
});

app.post("/createAvailability", (req, res) => {
  available
    .createAvailability(req.body._id, req.body.timeSlots)
    .then((available) => {
      res.status(201).json(available);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        error:
          "The document was not able to be compiled, check parameters again.",
      });
    });
});

app.post("/createAvailableId/:id", (req, res) => {
  available
    .createAvailableId(req.body.id, req.body.time)
    .then((available) => {
      res.status(201).json(available);
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        error:
          "The document was not able to be compiled, check parameters again.",
      });
    });
});

app.get("/retrieveAvailability", (req, res) => {
  available
    .retrieveAvailable()
    .then((available) => {
      if (available !== null) {
        res.json(available);
      } else {
        res.status(404).json({
          Error: "The resource you are trying to locate does not exist.",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        Error:
          "The document was not able to be compiled, check parameters again.",
      });
    });
});

app.get("/retrieveAvailabilityId/:date", (req, res) => {
  available
    .retrieveAvailabilityId(req.params.date)
    .then((available) => {
      if (available !== null) {
        res.json(available);
      } else {
        res.status(404).json({
          Error: "The resource you are trying to locate does not exist.",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        Error:
          "The document was not able to be compiled, check parameters again.",
      });
    });
});

app.get("/deleteAllAvailability", (req, res) => {
  available
    .deleteAllAvailability()
    .then((deletedCount) => {
      if (deletedCount === 1) {
        res.status(204).send();
      } else {
        res
          .status(404)
          .json({
            Error: "The resource you are trying to locate does not exist.",
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res
        .status(400)
        .json({
          Error:
            "Document was not able to be compiled, check parameters again.",
        });
    });
});

app.delete("/deleteAvailable/:_id", (req, res) => {
  available
    .deleteAvailability(req.params._id)
    .then((deletedCount) => {
      if (deletedCount === 1) {
        res.status(204).send();
      } else {
        res
          .status(404)
          .json({
            Error: "The resource you are trying to locate does not exist.",
          });
      }
    })
    .catch((error) => {
      console.error(error);
      res
        .status(400)
        .json({
          Error:
            "Document was not able to be compiled, check parameters again.",
        });
    });
});

app.get("/retrieveAppointmentsId/:id", (req, res) => {
  available
    .retrieveAppointmentsId(req.params.id)
    .then((available) => {
      if (available !== null) {
        res.json(available);
      } else {
        res.status(404).json({
          Error: "The resource you are trying to locate does not exist.",
        });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(400).json({
        Error:
          "The document was not able to be compiled, check parameters again.",
      });
    });
});

app.listen(port, () => {
  console.log("Connected to the Server.");
});
