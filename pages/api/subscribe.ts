import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {MAILERLITE_API_KEY, MAILERLITE_GROUP_ID} = process.env
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const result = await fetch(
    `https://api.mailerlite.com/api/v2/groups/${MAILERLITE_GROUP_ID}/subscribers`,
    {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'X-MailerLite-ApiDocs': 'true',
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': MAILERLITE_API_KEY
      },
      body: JSON.stringify({ email: email, resubscribe: false })
    }
  );

  const data = await result.json();
console.log({data})
console.log({result})
  if (!result.ok) {
    return res.status(500).json({ error: data.error.email[0] });
  }

  return res.status(201).json({ error: '' });
}