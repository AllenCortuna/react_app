import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    hotelName: { type: String, required:  true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    image: { type: String, required: true },
    id: { type: String },
});

export default mongoose.model("User", userSchema);
