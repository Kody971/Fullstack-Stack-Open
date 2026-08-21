const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URI;
console.log("connecting to url...");

mongoose
  .connect(url, { family: 4 })
  .then((data) => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log("error conneting to MongoDB:", err.message);
  });

const contactSchema = new mongoose.Schema({
  name: String,
  number: String,
});

contactSchema.set("toJSON", {
  transform: (document, respondedObject) => {
    respondedObject.id = respondedObject._id.toString();
    delete respondedObject._id;
    delete respondedObject.__v;
  },
});

module.exports = new mongoose.model("Contact", contactSchema);
