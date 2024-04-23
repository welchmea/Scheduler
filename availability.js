import mongoose from "mongoose";

mongoose.connect(
    'mongodb+srv://megrosewel:w28BRwjptIqEbl9L@scheduler.uijs5w5.mongodb.net/?retryWrites=true&w=majority&appName=Scheduler',
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
    day: { type: String, required: true},
    _id: {type: Date, required: true},
    time: { type: String, required: true },
});


const Available = mongoose.model("Available", available);

const createAvailability = async (day, time, _id) => {
  const available = new Available({
    day: day,
    time: time,
    _id: date,
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


const deleteAvailable = async (_id) => {
  const result = await Available.deleteOne({ _id: _id });
  return result.deletedCount;
};

const updateAvailability = async (_id, day, time) => {
  const result = await Available.replaceOne(
    { _id: _id },
    {
        day: day,
        time: time,
    }
  );
  return {
    day: day,
    time: time,
  };
};

export {
    createAvailability,
    deleteAvailable,
    retrieveAvailabilityId,
    retrieveAvailable,
    updateAvailability,
};
