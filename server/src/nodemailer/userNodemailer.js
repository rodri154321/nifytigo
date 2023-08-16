require('dotenv').config();
const { GMAIL_USER, GMAIL_PASSWORD } = process.env;
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

const WelcomeEmail = async (email, name) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASSWORD
            },
        });

        // Leer el contenido del template HTML
        const templatePath = path.join(__dirname, 'template.html');
        const templateContent = fs.readFileSync(templatePath, 'utf-8');

        templateContent = templateContent.replace('[nombre del Usuario]', name);

        const mailOptions = {
            from: GMAIL_USER,
            to: email,
            subject: 'Bienvenido a NifytiGo!',
            html: templateContent, // Usar el contenido del template HTML aquí
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error al enviar el correo electrónico: ', error);
    }
};

module.exports = {WelcomeEmail};