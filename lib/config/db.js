import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://felix160:Fl%40123456789@cluster0.sjhic6m.mongodb.net/todo-app');
    console.log('DB Connected');
}