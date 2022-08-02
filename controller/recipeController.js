const Recipe = require("../model/recipe");
const Category = require("../model/category");



exports.create = async (req, res) => {
    try {
        
        const { name, description, category_id, contributor_id, ingredient, step, estimation} = req.body;
        const recipe = await Recipe.create({
            name, description, category_id, contributor_id, ingredient, step, estimation
        });
        return res.status(200).send({message : "Success", data: recipe });
    } catch (error) {
        return res.status(400).send({message : "data not found"});
    }
}

exports.all = async (req, res) => {
    
    try {
        const category_name = req.query.category;
        const recipe_name = req.query.recipe;
        let recipe;
        if(category_name){
            const category_ids = await Category.findOne({ 'name' : category_name });
            recipe = await Recipe.find({'category_id' :category_ids.id}).populate('category_id').populate('contributor_id');
        }else if(recipe_name){
            recipe = await Recipe.find({'name' :recipe_name}).populate('category_id').populate('contributor_id');
        }else{
            recipe = await Recipe.find().populate('category_id').populate('contributor_id');
        }
        return res.status(200).send({message : "Success", data: recipe });
        
    } catch (error) {
        console.log(error);
    }
}
