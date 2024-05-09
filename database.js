import mongoose from "mongoose";
import bcrypt from "bcrypt";

mongoose.connect(
  "mongodb+srv://megrosewel:w28BRwjptIqEbl9L@scheduler.uijs5w5.mongodb.net/?retryWrites=true&w=majority&appName=Scheduler"
);
const scheduleDB = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
scheduleDB.once("open", (err) => {
  if (err) {
    res.status(500).json({
      error:
        "Internal Server Error. The server was unable to process this request.",
    });
  } else {
    console.log(
      "You have successfully connected to MongoDB collection using Mongoose."
    );
  }
});

const loginSchema = mongoose.Schema({
  _id: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  appointment: {type: Object, required: false},
});

const Login = mongoose.model("Login", loginSchema);

// SIGN UP
const createUser = async (_id, firstName, lastName, phone, password) => {
  const checkDup = await Login.findById(_id).exec();
  if (checkDup != null) {
    throw 422;
  }
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  const user = new Login({
    _id: _id,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    password: hash,
  });
  user.save();
  const details = [firstName, lastName, _id];
  return details;
};

// LOGIN
const checkUser = async (_id) => {
  const storedHash = await Login.findById(_id).exec();
  if (!storedHash) {
    throw 422;
  }
  return storedHash
};


const retrieveUsers = async () => {
  const query = Login.find();
  return query.exec();
};

const retrieveUsersId = async (_id) => {
  const query = Login.findById({ _id: _id });
  return query.exec();
};

const deleteUser = async (_id) => {
  const result = await Login.deleteOne({ _id: _id });
  return result.deletedCount;
};

const updateUser = async (_id, firstName, lastName, phone, password, appointment) => {
  const filter = { _id: _id};
  const update = { 
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    password: password,
    appointment: appointment,
  };
  let result = await Login.findOneAndUpdate(filter, update)
};

export {
  createUser,
  checkUser,
  retrieveUsers,
  retrieveUsersId,
  updateUser,
  deleteUser,
};
