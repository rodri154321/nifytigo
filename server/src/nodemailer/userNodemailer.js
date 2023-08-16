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
        const templatePath = path.join(__dirname, 'templateWelcomeEmail.html');
        const templateContent = fs.readFileSync(templatePath, 'utf-8');

        const modifiedTemplate = templateContent.replace("[Nombre del Usuario]", name);


        const mailOptions = {
            from: GMAIL_USER,
            to: email,
            subject: 'Bienvenido a NifytiGo!',
            html: modifiedTemplate, // Usar el contenido del template HTML aquí
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error al enviar el correo electrónico: ', error);
    }
};


const nftPurchaseNotification = async (email, nftName, name) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASSWORD
            },
        });
        const templatePath = path.join(__dirname, 'templatePurchaseNft.html');
        const templateContent = fs.readFileSync(templatePath, 'utf-8');

        const modifiedTemplate = templateContent
        .replace("[Nombre del Usuario]", nftName)
        .replace("[Nombre del NFT]", name)
        

        const mailOptions = {
            from: GMAIL_USER,
            to: email,
            subject: 'Tu creacion de NFT se realizo con exito!',
            html: modifiedTemplate,
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        
    }
}

module.exports = {WelcomeEmail, nftPurchaseNotification};

