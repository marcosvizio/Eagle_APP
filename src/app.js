import express from 'express';
import mongoose from 'mongoose';
import { create } from 'express-handlebars';
import * as dotenv from 'dotenv';
import session from 'express-session';
import MongoStore from 'connect-mongo';

import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';
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

app.use(session({
    store: new MongoStore({
        mongoUrl: URL_MONGO,
        ttl: 3600
    }),
    secret: "eagleApp",
    resave: false,
    saveUninitialized: false
}))

const hbs = create({
    helpers: {
      eq: (a, b) => a === b,
    },
  });
  
  app.engine('handlebars', hbs.engine);
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')

app.use('/api/users', usersRouter)
app.use('/', viewsRouter)