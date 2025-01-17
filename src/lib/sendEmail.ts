"use server";
import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  mobile: string;
  city: string;
  message: string;
}

const sendEmail = async ({
  name,
  email,
  mobile,
  city,
  message,
}: EmailData): Promise<void> => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // or another email service
    auth: {
      user: "bentan010918@gmail.com",
      pass: "vhkmsyyyyafbzajc",
    },
  });

  // Email options
  const mailOptions = {
    from: `"${name}" <${email}>`, // Set sender's name and email
    to: "bentan010918@gmail.com", // List of recipients
    subject: "New Contact Form Submission", // Subject line
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${mobile}\nCity: ${city}\nMessage: ${message}`, // Plain text body
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${mobile}</p><p>City: ${city}</p><p>Message: ${message}</p>`, // HTML body
  };

  // Send mail
  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
};

export default sendEmail;
