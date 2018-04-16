import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Nuxt, Builder } from 'nuxt';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import store from 'connect-mongo';
import passport from 'passport';
// import path from 'path';
import auth from './auth';

import api from './api';

const MongoStore = store(session);
auth(passport);

const app = express();
const host = process.env.HOST || '127.0.0.1';
const separate = process.env.NODE_ENV === 'separate';
const port = process.env.PORT || (separate ? 8008 : 3000);

dotenv.load();
mongoose.connect(process.env.MONGODB_LOCATION);

app.use(bodyParser());
app.use(cookieParser());
app.use(session({
    secret: 'mysecret',
    store: new MongoStore({
        url: process.env.MONGODB_LOCATION
    }),
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('port', port);

// Import API Routes
app.use('/api/v1', api);

app.get('/api/v1/userdata', authenticationMiddleware(), (req, res) => {
    res.send(req.user);
});
app.post('/api/v1/login', passport.authenticate('local-login', {}), (req, res) => {
    res.status(200).send(req.user);
});
app.post('/api/v1/signup', (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        if (err) {
            res.status(500).send(err);
        } else if (info) {
            console.log('info', info);
            res.status(401).send(info);
        } else {
            req.login(user, error => {
                if (error) {
                    res.status(500).send(err);
                }
                res.send(user);
            });
        }
    })(req, res, next);
});
app.post('/api/v1/logout', (req, res) => {
    req.logout();
    res.send();
});

if (!separate) {
    // Import and Set Nuxt.js options
    let config = require('../nuxt.config.js');
    config.dev = !(process.env.NODE_ENV === 'production');

    // Init Nuxt.js
    const nuxt = new Nuxt(config);

    // Build only in dev mode
    if (config.dev) {
        const builder = new Builder(nuxt);
        builder.build();
    }

    // Give nuxt middleware to express
    app.use(nuxt.render);
}

// Listen the server
app.listen(port, host);
console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

function authenticationMiddleware () {
    return function (req, res, next) {
        console.log('CHECKING####');
        console.log(req.user);
        if (req.isAuthenticated()) {
            return next();
        }
        res.status(401).send();
    };
}
