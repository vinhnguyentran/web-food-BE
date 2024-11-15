import mongoose from "mongoose";

export const connectDB =  async () => {
    await mongoose.connect('mongodb+srv://vinhnguyentrandev:admin123@cluster0.3rcah.mongodb.net/?').then(() => console.log('DB connected'))
}