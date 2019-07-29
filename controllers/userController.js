const db = require("../models");

// Defining methods for the booksController
module.exports = {

    loginuser: function (req, res) {
        res.json("/dashboard")
    },

    signup: function (req, res) {
        console.log(req.body);
        db.User.create({
            firstName: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber
        }).then(function () {
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log(err);
            res.json(err);
        });
    },

    logout: function (req, res) {
        req.logout();
        res.redirect("/");
    },

    userdata: function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        }
        else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    }

};