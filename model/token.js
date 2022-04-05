const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    token:{
        type: String,
        required: true,
    },
    createAt:{
        type: Date,
        default: Date.now,
        expires: 3600
    }
});

module.exports = mongoose.model("token", tokenSchema);