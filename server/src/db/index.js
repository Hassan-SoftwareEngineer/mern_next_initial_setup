import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const dbConInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`);
        console.log(`\n Db Connection Successfull at host ...  ${dbConInstance.connection.host}`);
    } catch (err) {
        console.log(`Db Connection Error : ${err}`);
        process.exit(1);
    }
}

export { connectDb };

