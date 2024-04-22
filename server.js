import express from 'express';
import cors from 'cors';

const port = 5000;
const app = express();
app.use(express.json());
app.use(express.static("src"));
app.use(cors());


app.post('/sendEmail', (req, res) => {
    console.log(req.body)
    return res.status(201).json();
    
})

app.listen(port, () => {
    console.log("Connected to the Server.");
})