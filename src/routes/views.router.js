import { Router } from 'express';

const router = Router();

router.get('/', (_req,res)=>{
    try {
        res.status(200).render('home', {
            css: 'style',
            title: "Eagle Eye"
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

router.get('/contacto', (_req, res)=>{
    try {
        res.status(200).render('contacto', {
            css: 'style',
            title: "Eagle Eye"
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/about', (_req, res)=>{
    try {
        res.status(200).render('about', {
            css: 'style',
            title: "Eagle Eye"
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/login', (_req, res)=>{
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