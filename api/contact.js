export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, company, message, _honey } = req.body;

  // Honeypot — if filled, silently pretend success
  if (_honey) {
    return res.status(200).json({ success: true });
  }

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  // Basic email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not configured');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Echo Intl Medica <noreply@echointlmedica.com>',
        to: ['ariana@echointlmedica.com'],
        reply_to: email,
        subject: `New inquiry from ${name}`,
        html: [
          `<h2>New Contact Form Submission</h2>`,
          `<p><strong>Name:</strong> ${escapeHtml(name)}</p>`,
          `<p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
          company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : '',
          `<hr />`,
          `<p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>`,
        ].join('\n'),
      }),
    });

    if (!response.ok) {
      const err = await response.json();
      console.error('Resend API error:', err);
      return res.status(502).json({ error: 'Failed to send message. Please try again.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
