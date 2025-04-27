const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Beach = require("./models/Beach");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

const beachesToDelete = ["Ariyaman/kushi Beach, Rameswaram"];

const deleteBeaches = async () => {
  try {
    const result = await Beach.deleteMany({ name: { $in: beachesToDelete } });
    console.log(`${result.deletedCount} beaches deleted successfully.`);
  } catch (error) {
    console.error("Error deleting beaches", error);
  } finally {
    mongoose.disconnect();
  }
};

deleteBeaches();
