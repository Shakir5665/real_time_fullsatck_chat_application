import mongoose from "mongoose"

// function to connect the mongoDB database

export const connectDB = async () => {

    try {

       mongoose.connection.on('connected', () => console.log('Database Connected'));
       await mongoose.connect(`${process.env.MONGODB_URI}/Chat-App`);
        

    } catch (error) {
        console.log(error);
    }
}