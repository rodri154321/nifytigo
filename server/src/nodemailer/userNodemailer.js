require('dotenv').config();
const { GMAIL_USER, GMAIL_PASSWORD } = process.env;
const nodemailer = require('nodemailer')
const fs = require('fs');
const path = require('path');

const WelcomeEmail = async (email) => {
    try {
        // Cargar el contenido del archivo HTML de la plantilla
        const templatePath = path.join(__dirname, 'welcome_email_template.html');
        const templateHtml = fs.readFileSync(templatePath, 'utf-8');

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASSWORD
            },
        });

        const mailOptions = {
            from: GMAIL_USER,
            to: email,
            subject: '¡Bienvenido a nuestra página!',
            // Usar el contenido HTML del template
            html: templateHtml,
        }

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error al enviar el correo electrónico: ', error);
    }
};

module.exports = WelcomeEmail;


