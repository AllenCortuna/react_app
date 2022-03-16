import express from 'express';
import mongoose from 'mongoose';

import RoomPost from '../models/postRoom.js';

const router = express.Router();

export const getRoom = async (req, res) => { 
    try {
        const roomPost= await RoomPost.find()
                
        res.status(200).json(roomPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createRoom = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const roomPost = new RoomPost({name, location,roomAvailable,image,roomAvailable})

    try {
        await newRoomPost.save();

        res.status(201).json(newRoomPost );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;
