const Category = require("../model/category");

exports.create = async (req, res) => {
    try {
        const { name, description} = req.body;
        const category = await Category.create({
            name,
            description
        });
        return res.status(200).send({message : "Success", data: category });
    } catch (error) {
    return res.status(400).send({message : "data not found"});
    }
}
exports.all = async (req, res) => {
    try {
        const category = await Category.find();
        return res.status(200).send({message : "Success", data: category });
    } catch (error) {
    return res.status(400).send({message : "Invalid Credential"});
    }
}