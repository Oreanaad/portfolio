const nodemailer = require('nodemailer');

const MAX_LENGTHS = { name: 100, company: 100, email: 254, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// User input lands inside an HTML email body, so every interpolated value has to
// be escaped or a submitted "<img onerror=...>" would render as live markup.
const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const json = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return json(405, { ok: false, error: 'Method Not Allowed' });
  }

  let data;
  try {
    data = JSON.parse(event.body || '{}');
  } catch {
    return json(400, { ok: false, error: 'Invalid JSON body' });
  }

  const name = (data.name || '').trim();
  const company = (data.company || '').trim();
  const email = (data.email || '').trim();
  const message = (data.message || '').trim();

  if (!name || !email || !message) {
    return json(400, { ok: false, error: 'Name, email and message are required' });
  }
  if (!EMAIL_RE.test(email)) {
    return json(400, { ok: false, error: 'Please enter a valid email address' });
  }
  for (const [field, limit] of Object.entries(MAX_LENGTHS)) {
    if ((data[field] || '').length > limit) {
      return json(400, { ok: false, error: `${field} is too long (max ${limit} characters)` });
    }
  }

  // EMAIL_USER / EMAIL_PASS are the names this site was already configured
  // with, so both spellings are accepted and SMTP_* simply wins when set.
  const user = process.env.SMTP_USER || process.env.EMAIL_USER;
  const pass = process.env.SMTP_PASS || process.env.EMAIL_PASS;
  const to = process.env.MAIL_TO || user;

  if (!user || !pass) {
    console.error('Missing SMTP_USER/EMAIL_USER and SMTP_PASS/EMAIL_PASS environment variables');
    return json(500, { ok: false, error: 'Could not send the message' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: Number(process.env.SMTP_PORT || 465) === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      // The From address must stay on the authenticated domain; the visitor's
      // address goes in replyTo so hitting reply answers them directly.
      from: `"Portfolio contact" <${user}>`,
      to,
      replyTo: `"${name.replace(/"/g, '')}" <${email}>`,
      subject: `Portfolio message from ${name}${company ? ` (${company})` : ''}`,
      text: `Name: ${name}\nCompany: ${company || '-'}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p>
             <p><strong>Company:</strong> ${escapeHtml(company || '-')}</p>
             <p><strong>Email:</strong> ${escapeHtml(email)}</p>
             <p><strong>Message:</strong></p>
             <p>${escapeHtml(message).replace(/\n/g, '<br>')}</p>`,
    });

    return json(200, { ok: true });
  } catch (error) {
    // Log the detail server-side, return a generic message so SMTP internals
    // are never exposed to the browser.
    console.error('Error sending contact email:', error);
    return json(500, { ok: false, error: 'Could not send the message' });
  }
};
