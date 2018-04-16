import { Strategy } from 'passport-local';
import User from './models/user';

export default function (passport) {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
    passport.use('local-login', new Strategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function (req, email, password, done) {
        User.findOne({'email': email}, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }

            if (!user.validPassword(password)) {
                return done(null, false);
            }

            return done(null, user);
        });
    }));
    passport.use('local-signup', new Strategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    function (req, email, password, done) {
        console.log('email', email);
        console.log('password', password);
        User.findOne({
            'email': email
        }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (user) {
                return done(null, false, {error: 'USER_EXISTS'});
            } else {
                var newUser = new User();
                newUser.email = email;
                newUser.password = newUser.generateHash(password);
                newUser.save(function (err) {
                    if (err) {
                        throw err;
                    }
                    return done(null, newUser);
                });
            }
        });
    }));
}
