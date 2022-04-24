var User = require('../models/User.js')
var users =[{
    id : 1,
    firstName : 'Foulen',
    lastName : 'Ben Foulen',
    emailAddress : 'Foulen@gmail.com'
},
    {
        id : 2,
        firstName: 'Foulena',
        lastName: 'Ben Foulena',
        emailAddress: 'Foulena@gmail.com'
    }
]

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({"error message": error});
    }
}

exports.getUserById = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findOne({id : id});
        res.status(200).send(users);

    } catch (error) {
        res.status(500).send({"error message": error});
    }
}

exports.addUser = async (req, res) => {
    const {firstName, lastName, emailAddress} = req.body;
    try {
        let existUser = await User.findOne({emailAddress :emailAddress});
        if (! existUser) {
            let newUser = new User({
                firstName: firstName,
                lastName: lastName,
                emailAddress: emailAddress
            });

            let result = await newUser.save();
            res.status(200).send(result);
        } else {
            res.status(500).send("The address email already exists ! ")
        }
    } catch (error) {
        res.status(500).send({"error message": error});
    }
}
exports.deleteUser = async (req, res) => {
    let email = req.body.emailAddress;
    try {
        let user = await User.deleteOne({emailAddress :email });
        res.status(200).send("User successfully deleted !");
    } catch (error) {
        res.status(500).send({"error message": error});
    }
}

