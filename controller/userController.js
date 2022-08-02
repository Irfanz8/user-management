// import bcrypt from "bcryptjs/dist/bcrypt";

var bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const User = require("../model/user");

exports.register = async (req, res) => {
   try {
    
    const { first_name, last_name, email, password, role } = req.body;

    if (!(email && password && first_name && last_name)) {
        return res.status(400).send("all input Required");
    }

    const oldUser = await User.findOne({ email });

    if(oldUser){
         return res.status(409).send("user exist, please login");
    }

    if (role == "admin") {
        roles = 1;
    }else{
        roles = 2;
    }
    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        role : roles
    });

    const token = jwt.sign(
        { user_id: user._id, email, role },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h",
        }
    );

    user.token = token;

    return res.status(200).send({message : "Success", data: user });

   } catch (error) {
    return res.status(400).send({message : "Invalid Credential"});

   } 
}

exports.login = async (req, res) => {
    try {
      
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send("all input required");
        }

        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            
            const token = jwt.sign(
                { user_id: user._id, email, role : user.role },

                process.env.TOKEN_KEY,
                {
                    expiresIn : "2h",
                }
            );

            user.token = token;
            
            // res.status(200).json(user);
            return res.status(200).send({message : "Success", data: user });

        }
        return res.status(400).send({message : "email/password wrong or not created"});

    } catch (error) {
       return res.status(400).send({message : "Invalid Credential"});
    }
} 