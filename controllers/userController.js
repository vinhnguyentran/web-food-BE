import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from "validator";

// login user
const loginUser = async (req,res) => {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
       
        if(!user){
          return res.json({success: false, message: "User Don't Exist"})
        }
      
        const isMatch = await bcrypt.compare(password, user.password)
        
        
        if(!isMatch) {
           return res.json({success: false, message: 'Invalid Password'})
        }
        
        const token = createToken(user._id)
        return res.json({success: true, token})
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message: 'Error'})
    }
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

// register user
const registerUser = async (req,res) => {
    const {name, email, password} = req.body;
    try {
        const exists = await userModel.findOne({email})
        // check user exist
        if(exists){
           return res.json({success: false, message: 'User already exists'})
        }
        // check validate email
        if(!validator.isEmail(email)){
            return res.json({success: false, message: 'Please enter valid email'})
        }
        // check password strong
        if(password.length<8){
            return res.json({success: false, message: 'Please enter strong password'})
        }
        // hashing user password = mã hóa password
        const slat = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,slat)
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success: true,token})
    } catch (error) {
        console.log(error);
        
        return res.json({success: false, message: 'Error'})
    }
}

export {loginUser, registerUser}