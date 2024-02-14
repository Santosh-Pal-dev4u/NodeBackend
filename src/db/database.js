import mongoose from "mongoose";

export const connectToDB = async () => {

    try {

        const connectionInsatance =
            await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
        console.log(`\nMongodb connected , DB Host :${connectionInsatance.connection.host}`);

    } catch (error) {
        console.log(`mongo db connection error : ${error} `);

    }

}; 