import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://megrosewel:w28BRwjptIqEbl9L@scheduler.uijs5w5.mongodb.net/?retryWrites=true&w=majority&appName=Scheduler"
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
  _id: { type: Date, required: true },
  timeSlots: { type: Object, required: true },
});

const Available = mongoose.model("Available", available);

const createAvailability = async (_id, timeSlots ) => {
  const available = new Available({
    _id: _id,
    timeSlots: timeSlots

  });
  return available.save();
};

const retrieveAvailable = async () => {
  const query = Available.find();
  return query.exec();
};

const retrieveAvailabilityId = async (_id) => {
  const query = Available.findById({ _id: _id });
  return query.exec();
};

const deleteAvailability = async ( _id ) => {
  const result = await Available.deleteOne({ _id: _id});
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
  deleteAvailability,
  retrieveAvailabilityId,
  retrieveAvailable,
  updateAvailability,
};
