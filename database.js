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
});

const apptSchema = mongoose.Schema({
  service: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: false },
  time: { type: String, required: true },
});

const Login = mongoose.model("Login", loginSchema);
const Appointment = mongoose.model("Appointment", apptSchema);

const createUser = async (_id, firstName, lastName, phone, password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(password, salt);
  const user = new Login({
    _id: _id,
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    password: hash
  });
  return user.save();
};

const checkUser = async (_id, password) => {

}

const createAppointment = async (service, date, description, time) => {
  const appointment = new Appointment({
    service: service,
    date: date,
    description: description,
    time: time,
  });
  return appointment.save();
};

const retrieveUsers = async () => {
  const query = Login.find();
  return query.exec();
};
const retrieveAppointments = async () => {
  const query = Appointment.find();
  return query.exec();
};

const retrieveAppointmentsId = async (_id) => {
  const query = Appointment.findById({ _id: _id });
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
const deleteAppointment = async (_id) => {
  const result = await Appointment.deleteOne({ _id: _id });
  return result.deletedCount;
};

const updateUser = async (_id, firstName, lastName, phone, password) => {
  const result = await User.replaceOne(
    { _id: _id },
    {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      password: password,
    }
  );
  return {
    firstName: firstName,
    lastName: lastName,
    phone: phone,
    password: password,
  };
};

const updateAppointment = async (_id, service, date, description, time) => {
  const result = await Appointment.replaceOne(
    { _id: _id },
    {
      service: service,
      date: date,
      description: description,
      time: time,
    }
  );
  return {
    service: service,
    date: date,
    description: description,
    time: time,
  };
};

export {
  createUser,
  createAppointment,
  retrieveUsers,
  retrieveUsersId,
  retrieveAppointments,
  retrieveAppointmentsId,
  updateUser,
  updateAppointment,
  deleteUser,
  deleteAppointment,
};
