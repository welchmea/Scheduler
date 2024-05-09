import express from "express";
import cors from "cors";
import * as user from "./database.js";
import * as available from "./availability.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import cookieParser from "cookie-parser";

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
  console.log(req.body);
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
      let id = req.body._id
      let password = req.body.password
      return authorize(res, id, password, user)
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({
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
            if (result == true) {
              let id = req.body._id
              let password = user.password
              return authorize(res, id, password, user)

            } else if (result == false) {
              res.status(401).json(user)
            }
    })
  })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({
          error:
            "Wrong Password! Try again.",
        });
    });
});

const authorize  = async (res, id, password, user) => {
  const authToken = jsonwebtoken.sign({id, password }, "SECRET_KEY");
  console.log(authToken)
  await res.cookie("authToken", authToken, {
    path: "/",
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  });
  return await res.send({authToken, user})
}

app.get("/autoLogin", (req, res) => {
  const cookie = req.cookies.authToken;

  // if we received no cookies then user needs to login.
  if (!cookie) {
    return res.sendStatus(401);
  }
  try {
    let results = jsonwebtoken.verify(cookie, "SECRET_KEY")

    return res.send({id: results.id});
  } catch {
    return res.sendStatus(401);
  }
});

// this path will be used to check if the cookie is valid to auto login inside the application;
app.get("/logout", (req, res) => {
  res.clearCookie('authToken');
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
      res
        .status(400)
        .json({
          error:
            "The document was not able to be compiled, check parameters again.",
        });
    });
});

app.post("/createAvailability", (req, res) => {
  available
    .createAvailability(req.body._id, req.body.timeSlots)
    .then((available) => {
      res.status(201).json(available);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({
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
        res
          .status(404)
          .json({
            Error: "The resource you are trying to locate does not exist.",
          });
      }
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({
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
        res
          .status(404)
          .json({
            Error: "The resource you are trying to locate does not exist.",
          });
      }
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({
          Error:
            "The document was not able to be compiled, check parameters again.",
        });
    });
});

app.get("/deleteAllAvailability", (req, res) => {
  available.deleteAllAvailability()
      .then(deletedCount => {
          if (deletedCount === 1) {
              res.status(204).send();
          } else {
              res.status(404).json({ Error:'The resource you are trying to locate does not exist.' });
          }
      })
      .catch(error => {
          console.error(error);
          res.status(400).json({ Error: 'Document was not able to be compiled, check parameters again.' });
      });
});

app.delete("/deleteAvailable/:_id", (req, res) => {
  available.deleteAvailability(req.params._id)
      .then(deletedCount => {
          if (deletedCount === 1) {
              res.status(204).send();
          } else {
              res.status(404).json({ Error:'The resource you are trying to locate does not exist.' });
          }
      })
      .catch(error => {
          console.error(error);
          res.status(400).json({ Error: 'Document was not able to be compiled, check parameters again.' });
      });
});

app.get("/retrieveAppointmentsId/:id", (req, res) => {
  available
    .retrieveAppointmentsId(req.params.id)
    .then((available) => {
      if (available !== null) {
        res.json(available);
      } else {
        res
          .status(404)
          .json({
            Error: "The resource you are trying to locate does not exist.",
          });
      }
    })
    .catch((error) => {
      console.log(error);
      res
        .status(400)
        .json({
          Error:
            "The document was not able to be compiled, check parameters again.",
        });
    });
});

app.listen(port, () => {
  console.log("Connected to the Server.");
});
