import mongoose from 'mongoose';
import 'dotenv/config'


const Connection = async () => {
    try {
        await mongoose.connect(process.env.URI);
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;