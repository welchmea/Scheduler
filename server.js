import express from 'express';
import cors from 'cors';
import * as user from './database.js';
import * as available from './availability.js';

const port = 5000;
const app = express();
app.use(express.json());
// app.use(express.static("src"));
app.use(cors());


app.post('/sendEmail', (req, res) => {
    console.log(req.body)
    return res.status(201).json();
    
})

app.post ('/createUser', (req,res) => { 
    user.createUser(
        req.body._id,
        req.body.firstName,
        req.body.lastName,
        req.body.phone,
        req.body.password,
        )
        .then(user => {
            res.status(201).json(user);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The document was not able to be compiled, check parameters again.' });
        });
});

app.post ('/createAppointment', (req,res) => { 
    user.createAppointment(
        req.body.service,
        req.body.date,
        req.body.description,
        req.body.time,
        )
        .then(user => {
            res.status(201).json(user);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The document was not able to be compiled, check parameters again.' });
        },
      );

});

app.post ('/createAvailability', (req,res) => { 
    available.createAvailability(
        req.body._id,
        req.body.timeSlots,
        )
        .then(available => {
            res.status(201).json(available);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'The document was not able to be compiled, check parameters again.' });
        });
}
);

app.get('/retrieveAvailability', (req, res) => {
    available.retrieveAvailable()
        .then(available => { 
            if (available !== null) {
                res.json(available);
            } else {
                res.status(404).json({ Error: 'The resource you are trying to locate does not exist.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'The document was not able to be compiled, check parameters again.' });
        });
});

app.listen(port, () => {
    console.log("Connected to the Server.");
})