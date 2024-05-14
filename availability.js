import mongoose from "mongoose";
import 'dotenv/config';
// Model for creating an appointment and an 
// available time slot schedule 

mongoose.connect(
  process.env.VITE_MONGO_CONNECT_STRING
);
const availableDB = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
availableDB.once("open", (err) => {
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

const available = mongoose.Schema({
  _id: { type: String, required: true },
  timeSlots: { type: Object, required: true },
});

const apptSchema = mongoose.Schema({
  _id: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: String, required: true },
  description: { type: String, required: false },
  time: { type: String, required: true },
});

const Available = mongoose.model("Available", available);
const Appointment = mongoose.model("Appointment", apptSchema);

const createAppointment = async (_id, service, date, description, time) => {
  const checkDuplicate = await Appointment.findById(_id).exec();
  if (checkDuplicate != null) {
    throw 422;
  }
  const appointment = new Appointment({
    _id: _id,
    service: service,
    date: date,
    description: description,
    time: time,
  });
  appointment.save()
  await deleteAvailability(date, time)
  const details = [service, date, description, time]
  return details;
};

const retrieveAppointments = async () => {
  const query = Appointment.find();
  return query.exec();
};

const retrieveAppointmentsId = async (_id) => {
  const query = await Appointment.findById({ _id: _id });
  return query.exec();
};

const deleteAppointment = async (_id) => {
  const result = await Appointment.deleteOne({ _id: _id });
  return result.deletedCount;
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
const createAvailableId = async (_id, time ) => {
  const query = await Available.findById({ _id: _id });
  let currentTimes = query.timeSlots
  await updateAvailability(_id, currentTimes)
}

const createAvailability = async (_id, timeSlots ) => {
  const available = new Available({
    _id: _id,
    timeSlots: timeSlots

  });
  return available.save();
};

const retrieveAvailable = async () => {
  const query = Available.find().sort({_id: 1});
  return query.exec();
};

const retrieveAvailabilityId = async (_id) => {
  const query = Available.findById({ _id: _id });
  return query.exec();
};

const deleteAvailability = async ( date, time ) => {
  const query = await Available.findById({ _id: date });
  let currentTimes = query.timeSlots
  let index = currentTimes.indexOf(time)
  currentTimes.splice(index, 1)
  await updateAvailability(date, currentTimes)
  return
};

const deleteAllAvailability = async () => {
  const result = await Available.deleteMany({});
  return result.deletedCount;
};

const updateAvailability = async (_id, timeSlots) => {
  const result = await Available.replaceOne(
    { _id: _id },
    {
      timeSlots: timeSlots
    }
  );
  return {
    timeSlots: timeSlots
  };
};

export {
  createAvailability,
  createAvailableId,
  deleteAvailability,
  retrieveAvailabilityId,
  retrieveAvailable,
  updateAvailability,
  deleteAllAvailability,
  createAppointment,
  retrieveAppointments,
  retrieveAppointmentsId,
  updateAppointment,
  deleteAppointment,

};
