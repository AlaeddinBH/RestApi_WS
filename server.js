const express = require ('express');
const connect = require('./config/ConnctionDB');
require('dotenv').config({ path: "./config/.env" });
const User = require ("./models/User");

let app = express();

// Parsing middleware
app.use(express.json());

// database connection
connect(); 

// CRUD
// Add user 

app.post('/add', async (req, res) => {
    const {fullName,email,phone} = req.body; 
    try {
        const newContact = new User({
            fullName,
            email,
            phone
        }) 
        await newContact.save();
        res.send(newContact);
    } catch (error) {
        console.log(error);
    }
});

// Get user 

app.get('/get', async (req, res) => {
    try {
        const Users = await User.find();
        res.send(Users);
    } catch (error) {
        console.log(error);
    }
});

// edit user 

app.put('/update/:id', async (req, res) => {
    try {
        const editedContact = await User.findByIdAndUpdate(req.params.id, {...req.body}, {new: true});
        res.send(editedContact);
    } catch (error) {
        console.log(error);
    }
});

// delete user 

app.delete('/delete/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.send("user deleted");
    } catch (error) {
        console.log(error);
    } 
});

var PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => 
     err ? console.error(err) : console.log(`Server is running on PORT ${PORT}`)
);