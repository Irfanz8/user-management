const mongoose = require("mongoose");

const { MONGO_URI } = process.env;

exports.connect = () =>{

    mongoose.connect(MONGO_URI, {
        useNewUrlParser: true, 

        useUnifiedTopology: true 

    }).then(() => {
        console.log("db Connect");
    }).catch((error) => {
        console.log("db Error");
        console.error(error);
        process.exit(1);
    })
};