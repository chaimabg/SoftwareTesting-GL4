var express = require("express");
var router = express.Router();
var User = require("../models/User");
const bcrypt = require("bcrypt");


router.post("/", async(req, res) => {
    try {
        let user = await User.findOne({ emailAddress: req.body.emailAddress });
        if (!user) {
            res.status(500).send({ error: "User not found !" });

        } else {
            if (await bcrypt.compare(req.body.password, user.password)) {
                res.status(200).send({
                    identifier: req.body.identifier,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    emailAddress: req.body.emailAddress,
                    password: req.body.password
                    });

            } else {
                res.status(500).send({ error: "Incorrect Password  !" });
            }
        }
    } catch (e) {
        res.send(e);
    }
});

module.exports = router;
