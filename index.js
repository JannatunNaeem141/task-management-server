const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://task_manager:<password>@cluster0.cvtib.mongodb.net/?retryWrites=true&w=majority";

app.get('/', (req, res) => {
    res.send('Hello from task manager')
})

app.listen(port, () => {
    console.log(`Task manager listening on port ${port}`)
})