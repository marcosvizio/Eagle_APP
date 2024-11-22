import { Router } from 'express';
import UserManager from '../dao/manager/userManager.js'
import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import jwt from 'jsonwebtoken';

dotenv.config();

const router = Router();
const userManager = new UserManager();

const GMAIL_PASS = process.env.GMAIL_PASS

const GMAIL_USER = process.env.GMAIL_USER

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

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userManager.getUser({ email });

        if (!user || user.password !== password) {
            return res.status(401).send({status: 'error', message: 'Credenciales inválidas'});
        }

        req.session.user = {
            name: user.first_name,
            role: user.role,
            email: user.email
        };

        const token = jwt.sign({ userId: user._id, role: user.role }, 'tu_secreto', { expiresIn: '1h' });
        
        res.status(200).send({status: 'success', user: req.user, token});
    } catch (error) {
        console.log(error);
        res.status(500).send({status: 'error', message: 'Error interno del servidor'});
    }
});

router.post('/logout', async (req, res) => {
    try {
        req.session.destroy()
        res.status(200).send({status: 'success', message: 'Session logout complete'})
    } catch (error) {
        console.log(error)
    }
})

// Actualizar datos del usuario
router.put('/modify-user/:id', authMiddleware, async (req, res) => {
    try {
      const userId = req.params.id; // ID del usuario de los parámetros de la URL
      const { first_name, last_name, email, birthdate } = req.body; // Datos enviados en el cuerpo de la solicitud
  
      // Buscar y actualizar el usuario
      const updatedUser = await userManager.getUserAndModify(
        userId,
        { first_name, last_name, email, birthdate },
        { new: true, runValidators: true } // Devuelve el usuario actualizado y valida los datos
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
  
      // Enviar los datos del usuario actualizado
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar los datos del usuario' });
    }
  });
  
router.get('/modify-user/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const user = await userManager.getUser({ _id: id });
      if (!user) {
        return res.status(404).send('Usuario no encontrado');
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).send('Error al obtener el usuario');
    }
});

router.delete('/delete-user/:id', authMiddleware ,async (req, res) => {
    try {
        const userId = req.params.id;
        
        // Eliminar al usuario
        const deletedUser = await userManager.deleteUser(userId);
    
        if (!deletedUser) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
    
        res.json({ message: 'Usuario eliminado correctamente', user: deletedUser });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al eliminar el usuario' });
      }
});

export default router;