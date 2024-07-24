import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGODB);
    console.log('DB Connected');
}