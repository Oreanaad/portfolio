import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Config transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true, // Gmail con puerto 465 requiere true
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});


// Endpoint contacto
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Name, email y message son requeridos' });
    }

    await transporter.sendMail({
      from: `"Contacto Web" <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Nuevo mensaje de ${name}${company ? ` (${company})` : ''}`,
      text: message,
      html: `<p><b>Nombre:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Company:</b> ${company || '-'}</p>
             <p><b>Mensaje:</b></p>
             <p>${message}</p>`
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('Mailer error:', err);
    res.status(500).json({ ok: false, error: 'No se pudo enviar el email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});
