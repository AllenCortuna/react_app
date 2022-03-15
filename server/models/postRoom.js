import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    name: String,
    price: String,
    image: String,
    roomStatus: Boolean,
    updatedAt: {
        type: Date,
        default: new Date(),
    },


})

var RoomPost  = mongoose.model('RoomPost', roomSchema);

export default RoomPost;
