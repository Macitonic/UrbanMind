import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import reportRoutes from './ReportRoute.js';

const app = express();
const PORT = process.env.PORT|| 5000;

dotenv.config();

mongoose.connect(process.env.ATLAS_URL)
    .then(()=>console.log("MongoDB connected successfully"))
    .catch(err=> console.log(err));

//a simple built in middleware to parse incoming json bodies(mostly made by post requests)
app.use(express.json());

//serve uploads folder
app.use('/uploads',express.static('uploads'));

app.get('/', (req, res)=>{
    res.send('Hello world, my urban mind server is working');
});

app.use('/report', reportRoutes);

app.listen(PORT, ()=>{
    console.log('my urbanmind server is running')
});


