const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/mydatabase", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

// Schema and model
const formSchema = new mongoose.Schema({
  name: String,
  contactNumber: String,
  email: String,
  message: String,
});

const Form = mongoose.model("Form", formSchema);

// Endpoint to handle form submission
app.post("/submit-form", async (req, res) => {
  const { name, contactNumber, email, message } = req.body;

  const newForm = new Form({
    name,
    contactNumber,
    email,
    message,
  });

  try {
    await newForm.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-email-password",
      },
    });

    const mailOptions = {
      from: "your-email@gmail.com",
      to: "recipient-email@gmail.com",
      subject: "New Form Submission",
      text: `Name: ${name}\nContact Number: ${contactNumber}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Email sent: " + info.response);
    });

    res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to submit form" });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
