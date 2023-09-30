const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Server connected to MongoDB ${conn.connection.host}`.bgBlue.white
    );
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.black);
  }
};

module.exports = connectDB;
