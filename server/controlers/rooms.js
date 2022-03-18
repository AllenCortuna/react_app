import express from 'express';
import mongoose from 'mongoose';

import RoomPost from '../models/postRoom.js';

const router = express.Router();

export const getRooms = async (req, res) => { 
    try {
        const roomPost= await RoomPost.find()
                
        res.status(200).json(roomPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getRoom = async (req, res) => { 
    const { id } = req.params;

    try {
        const room = await RoomPost.findById(id);
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createRoom = async (req, res) => {

    const {name,price,additionalInfo,roomStatus} = req.body;

    const newRoomPost = new RoomPost({name,price,additionalInfo,roomStatus});
    try {
        await newRoomPost.save();
        res.status(201).json(RoomPost);
    } catch (error) {
        console.log(RoomPost);
        res.status(409).json({ message: error.message });
    }
}

export default router;
