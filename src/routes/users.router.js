import { Router } from 'express';
import UserManager from '../dao/manager/userManager.js'
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();

const router = Router();
const userManager = new UserManager();

const GMAIL_PASS = process.env.GMAIL_PASS

const GMAIL_USER = process.env.GMAIL_USER

// Configurar el transporter
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false
    }
});

router.post('/register', async (req, res) => {
    try {
        const newUser = req.body
        const emailUser = newUser.email
        const exist = await userManager.getUser({email:emailUser})
        if (exist) {
            res.status(400).send({
                status: 'failure',
                message: "Can't upload the User!"
            })
        } else {

            const user = await userManager.createUser(newUser); 

            const mailOptions = {
                from: GMAIL_USER,
                to: newUser.email,
                subject: 'Registro de usuario completado!',
                text: `Hola ${newUser.first_name},\n\n¡Te registramos de manera existosa en nuestra base de datos!\n\nMuchas gracias por confiar en nosotros.\nEAGLE EYE`
            };
            
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  console.log(error);
                  res.status(500).send('Error al enviar el correo electrónico');
                } else {
                  console.log('Correo electrónico enviado: ' + info.response);
                  res.status(200).send('Correo electrónico enviado exitosamente');
                }
              });
            
            res.status(200).send({
                status: 'success',
                message: 'User added!',
                payload: user
            })
        }
    } catch (error) {
        console.log(error);
    }
})

export default router;