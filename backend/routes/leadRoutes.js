import express from "express";
import Lead from "../models/Lead.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    console.log("Incoming data:", req.body);

    const lead = new Lead(req.body);
    await lead.save();

    res.status(201).json({
      success: true,
      message: "Lead saved successfully",
    });
  } catch (error) {
    console.error("Save error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to save lead",
    });
  }
});

export default router;
