import { User } from "../model/user.js";
import bcrypt from 'bcrypt';
import  jwt  from "jsonwebtoken";
import dotenv from 'dotenv';

import {Token} from '../model/token.js'

dotenv.config();

export const signupUser = async(request,response) => {
    try{
       
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(request.body.password, salt);
        const user = {email:request.body.email, username:request.body.username, password : hashedPassword}

        const newUser = new User(user);
        await newUser.save();

        return response.status(200).json({ msg: `signup successful`})
    }catch(error){
        return response.status(200).json({ err: `error while signup`})
    }
}



export const loginUser = async(request,response) => {
    let user = await User.findOne({username : request.body.username });

    if(!user){
        return response.status(200).json({ err: `username does not match`})
    }

    try {
       let match = await bcrypt.compare(request.body.password, user.password);
       if (match) {
        const accessToken = jwt.sign(user.toJSON(), process.env.ACCESS_SECRET_KEY, { expiresIn: '15m'});
        const refreshToken = jwt.sign(user.toJSON(), process.env.REFRESH_SECRET_KEY);
        
        const newToken = new Token({ token: refreshToken });
        await newToken.save();
    
        response.status(200).json({ accessToken: accessToken, refreshToken: refreshToken,email: user.email, username: user.username, msg: "login successful"});
    
    }else{
        return response.status(200).json({ err: `password does not match`})
       }
    } catch (error) {
        response.status(200).json({ err: `error while login the user` })
    }
}