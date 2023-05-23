import user from "../models/user.js";
import jwt from 'jsonwebtoken';
import bcrypt from "bcryptjs"; 
export const registerform =  (req,res) =>{
    res.render('authentication/register');
};
export const register = async (req,res)=>{
    const{username, email, password}= req.body;
    console.log(username, email, password);
    const salt = bcrypt.genSaltSync(10);    
    const encryptedPassword = bcrypt.hashSync(password, salt);
    console.log(encryptedPassword);

    await user.create({username, email, password : encryptedPassword });

    res.redirect('/login');
};
export const loginform =  (req,res) =>{
    res.render('authentication/login');
};
export const login = async (req,res)=>{
    const{email, password}= req.body;
    const loggeduser = await user.findOne({email});
    const isCorrectPassword = bcrypt.compareSync(password,loggeduser.password);
    if(! isCorrectPassword){
        return res.send(' Incorrect Password');
    }
    const data = {
        _id: loggeduser._id,
        email: loggeduser.email,
    };
    const jwttoken = jwt.sign(data,process.env.JWT_SECRET);
    
    res.cookie('token',jwttoken);
    res.render('authentication/mainpage',data);
};