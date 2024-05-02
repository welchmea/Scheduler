import express from "express";
import cors from "cors";
import * as user from "./database.js";
import * as available from "./availability.js";

const port = 5000;
const app = express();
app.use(express.json());
app.use(cors());

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
    console.log(res.body)
    .then((user) => {
      res.status(201).json(user);
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
    .checkUser(req.body._id, req.body.password)
    .then((user) => {
      console.log(res)
      res.status(201).json(user)
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

app.post("/createAppointment", (req, res) => {
  user
    .createAppointment(
      req.body._id,
      req.body.service,
      req.body.date,
      req.body.description,
      req.body.time
    )
    .then((user) => {
      res.status(201).json(user);
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

app.listen(port, () => {
  console.log("Connected to the Server.");
});
