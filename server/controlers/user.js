import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModal from '../models/user.js';
const secret = 'test';



export const getUsers = async (req, res) => { 
    try {
        const userModal = await UserModal.find().sort({_id: -1})
        console.log('getuser ok');
        res.status(200).json(userModal);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const signin = async (req, res ) => {
    const { email, password } = req.body;

    try {
        const oldUser = await UserModal.findOne({email});
        if (!oldUser) return res.status(404).json({message: 'User does not exist '});

        const isPasswordCorrect = await bcrypt.compare(password ,oldUser.password);

        if (!isPasswordCorrect) return res.status(404).json({message: 'Invalid password'});
 
        const token = jwt.sign({email: oldUser.email, id: oldUser._id},secret,{expiresIn: '1h'});
        console.log("login ok");
        res.status(200).json({result: oldUser,token});
    } catch (err) {
        res.status(500).json({message: 'Something went wrong '});
    }
}


export const signup = async (req, res) => {
    const {hotelName, email,location, password,contact,image} = req.body;

    try {
        const oldUser =  await UserModal.findOne({email});
        if (oldUser)  return res.status(400).json({message: 'User already exist'});

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await UserModal.create({email,password: hashedPassword, hotelName,location,image});

        const token = jwt.sign({email: result.email,id : result._id },secret, {expiresIn: '1h'})
        res.status(201).json({result,token});
    } catch (error) {
        res.status(500).json({message: 'Something went wrong '});
        console.log(error);
    }
}

