import { NextApiRequest, NextApiResponse } from "next";
import * as sgMail from '@sendgrid/mail';
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const TO_EMAIL = process.env.TO_EMAIL ?? 'default@gmail.com';
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'default@gmail.com';

interface Data {
  firstName: string;
  lastName: string;
  email: string;
  messageBody: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 console.log({req})

  const { firstName, lastName, email, messageBody}:Data = req.body;
  

const fullName = `${firstName} ${lastName}`

  const message = {
    from: FROM_EMAIL,
    to: TO_EMAIL,
    subject: `Contact from: ${email}`,text: messageBody,
    html: `
    <div><strong>Name:</strong> ${fullName}</div>
    <br/>
    <div><strong>Email:</strong> ${email}</div>
    <br/>
    <div><strong>Message:</strong> ${messageBody}</div>
    <br/>
    <p>Sent from:
      ${email}</p>`,
  };

  console.log({message})
  try {
    await sgMail.send(message);
    res.status(200).send('Email sent successfully');
} catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
}
}
