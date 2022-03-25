import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '../models/user.js';
const secret = ' test';


export const signin = async (req, res ) => {
    const { email, password  } = req.body;

    try {
        const oldUser = await UserModel.findOne({email});
        if (!oldUser) return res.status(404).json({message: 'User does not exist '});

        const isPasswordCorrect = await bcrypt.cpmpare(password ,oldUser.password);

        if (!isPasswordCorrect) = return res.status(404).json({message: 'Invalid password'});

        const token = jwt.sign({email: oldUser.email},secret,{expiresIn: '1w'});

        res.status(200).json({result: oldUser,token});
    } catch (err) {
        res.status(500).json(message: 'Something went wrong ');
    }


}
