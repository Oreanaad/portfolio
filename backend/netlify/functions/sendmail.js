// netlify/functions/sendmail.js

const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = JSON.parse(event.body);
    const { name, email, message } = data;

    // 1. Configuración del transportador de Nodemailer (usando las variables de Netlify)
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true para 465, false para otros puertos como 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Opciones del correo (usa MAIL_TO/MAIL_FROM de tu env si quieres, pero es más seguro definirlo aquí)
    const mailOptions = {
      from: process.env.EMAIL_USER, // Remitente (tu cuenta de Gmail)
      to: 'oreanadev@gmail.com', // Destinatario (donde quieres recibir el mensaje)
      subject: `Nuevo mensaje de portfolio: ${name}`,
      html: `
        <p><strong>De:</strong> ${name} (${email})</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    // 3. Envío del correo
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Correo enviado con éxito!' }),
    };

  } catch (error) {
    console.error('Error al enviar el correo:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Fallo al enviar el correo.', details: error.message }),
    };
  }
};