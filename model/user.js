const mongoose = require("mongoose");
// const joi = require("joi");

const userSchema = new mongoose.Schema({
    first_name: { type: String, default:null},
    last_name: {type: String, default: null},
    email: {type: String, unique: true},
    password: {type: String},
    token: { type: String },
    role: {type : Number }
});

// const user = mongoose.model("user", userSchema);

// const validate = (user) =>  {
//     const schema = joi.object({
//         first_name: joi.string().required(),
//         last_name: joi.string().required(),
//         email: joi.string().email().required(),
//         password: joi.string().required()

//     }); 
// };

// module.exports = {user, validate}
module.exports =  mongoose.model("user", userSchema);