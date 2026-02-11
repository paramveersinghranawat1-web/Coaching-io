import transporter from "../models/mailer.js";

export const sendMail = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: `"Website Leads" <${process.env.MAIL_USER}>`,
      to: process.env.ADMIN_MAIL,
      subject: "New Lead Received",
      html: `
        <h2>New Lead</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>

      `,
    });

    res.status(200).json({ success: true, message: "Email sent" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email failed" });
  }
};
