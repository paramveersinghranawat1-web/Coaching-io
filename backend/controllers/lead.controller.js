const Lead = require("../models/Lead");

exports.createLead = async (req, res) => {
  await Lead.create(req.body);
  res.status(201).json({ success: true });
};
