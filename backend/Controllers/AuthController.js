const UserModel = require('../Models/Users');
const bcrypt = require('bcrypt');

const signup = async(req,res) => {
    try{
        const {nmae,email,password} =req.body;
        const user = await UserModel.findOne({email});
        if(user){
            return res.status(400).json({message : 'User is already exist, you can login',success: false});
        }
        const userModel = new UserModel({name,email,password});
        userModel.password = awit bcrypt.hash(password,10);
        await userModel.save();
        res.status(201)
        .json({
            message
        })
    }catch{

    }
}