import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://greatstack:20021123@cluster0.rmskn8m.mongodb.net/food_del_MERN').then(() => console.log("DB Connected"));
}