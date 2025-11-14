const express = require('express');
const app = express();
const imageRouter = require('./routes/image.js');

const PORT = process.env.PORT || 3000;

app.use(express.json());



app.use('/image', imageRouter);

app.listen(PORT, ()=>{
    console.log('app is running');
});