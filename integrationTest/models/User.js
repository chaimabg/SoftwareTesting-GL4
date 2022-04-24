var mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    emailAddress: { type: String, required: true },

});
module.exports = mongoose.model("User", UserSchema);
