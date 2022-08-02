const mongoose = require("mongoose");
const User = require("../model/user");
const Category = require("../model/category");

const recipeSchema = new mongoose.Schema({
    name: { type: String, default:null},
    description: {type: String, default: null},
    category_id:{ type: mongoose.ObjectId, ref: 'category' },
    contributor_id: {type: mongoose.ObjectId, ref: 'user'},
    ingredient: {type: Array},
    steps: { type: Array },
    estimation: {type : Number }
});

module.exports =  mongoose.model("recipe", recipeSchema);