import { Router } from 'express';
import UserManager from '../dao/manager/userManager.js';

const userManager = new UserManager();

const router = Router();

router.get('/', async (req,res)=>{
    try {
        const users = await userManager.getUsers();
        res.status(200).render('home', {
            css: 'style',
            title: "Eagle Eye",
            user: req.session.user,
            users: users
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/register', (_req, res)=>{
    try {
        res.status(200).render('register', {
            css: 'style',
            title: "Eagle Eye"
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/contacto', (req, res)=>{
    try {
        res.status(200).render('contacto', {
            css: 'style',
            title: "Eagle Eye",
            user: req.session.user
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/about', (req, res)=>{
    try {
        res.status(200).render('about', {
            css: 'style',
            title: "Eagle Eye",
            user: req.session.user
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/login', (req, res)=>{
    try {
        res.status(200).render('login', {
            css: 'style',
            title: "Eagle Eye"
        })
    } catch (error) {
        console.log(error);
    }
})

export default router