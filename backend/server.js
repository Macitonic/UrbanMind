import express from 'express';
import reportRoutes from './ReportRoute.js';

const app = express();
const PORT = process.env.port|| 5000;

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


