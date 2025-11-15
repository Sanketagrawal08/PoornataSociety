const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sanketagrawal6969:VuXaZhWIlZLPeW9B@subscriptioncluster1.79bbl8b.mongodb.net/poornataDB?retryWrites=true&w=majority&appName=subscriptionCluster1",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err);
  }
};


module.exports = connectDB;
