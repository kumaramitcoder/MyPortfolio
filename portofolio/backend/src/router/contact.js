const express = require("express");
const router = express.Router();
const path = require("path");
const keys = require("../config/keys");
const mailgun = require("../services/mailgun");

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    
    const result = await mailgun.sendEmail("contact", name, email, message);
    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
});

module.exports = router;
