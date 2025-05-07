const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/send-newsletter", async (req, res) => {
  const { name, email, phone, imA, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: "Enquire About Property",
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nI'm a: ${imA}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error });
  }
});

module.exports = router;