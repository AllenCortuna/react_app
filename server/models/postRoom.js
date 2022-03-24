import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    name: String,
    price: String,
    category: String,
    roomStatus: {
        type: Boolean,
        default: false
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },

});

var RoomPost = mongoose.model('RoomPost', roomSchema);
export default RoomPost;
