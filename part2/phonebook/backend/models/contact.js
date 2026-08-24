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
  name: {
    type: String,
    minLength: [3, "Name atleast 3 character"],
    required: [true, "User name required"],
  },
  number: {
    type: String,
    minLength: [8, "Phone number atleast 8 number"],
    validate: {
      validator: (v) => /^\d{2,3}-\d+$/.test(v),
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },
});

contactSchema.set("toJSON", {
  transform: (document, respondedObject) => {
    respondedObject.id = respondedObject._id.toString();
    delete respondedObject._id;
    delete respondedObject.__v;
  },
});

module.exports = new mongoose.model("Contact", contactSchema);
