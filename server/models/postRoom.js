import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    name: String,
    price: String,
    additionalInfo: String,
    roomStatus: String,
    updatedAt: {
        type: Date,
        default: new Date(),
    },

})

var RoomPost = mongoose.model('RoomPost', roomSchema);
export default RoomPost;
