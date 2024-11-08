import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import * as dotenv from 'dotenv';

import viewsRouter from './routes/views.router.js';
import participantsRouter from './routes/participants.router.js'
import __dirname from './utils.js';

dotenv.config();

const app = express();

const URL_MONGO = process.env.URL_MONGO

const PORT = process.env.PORT || 3000

mongoose.connect(URL_MONGO)

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(`${__dirname}/public`))

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

app.use('/api/participants', participantsRouter)
app.use('/', viewsRouter)