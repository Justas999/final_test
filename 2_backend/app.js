const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');


const app = express();
dotenv.config();

// Middlewaresss

app.use(cors());
app.use(express.json());




// Connecting to database
mongoose
  .connect(process.env.MONGODB_URI)
  .then((result) => {
    console.log('connected to MONGO_DB' + result);

    // Server starting
    app.listen(process.env.PORT, () =>
      console.log(`"Server is running on port: ${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(`Error: ${err}`));



//Models

const Team = require("./models/teamModel.js")

// Routes
// To check Api is OK
app.get("/", (req, res) => res.send("Api is OK"));


// GET 
// - /api/teams  get all users

app.get("/api/users/", async (req, res) => {
  let teams = await Team.find({});
  
console.log("teams", teams);
});


//POST
// - /api/teams user signup (for new users)

app.post("/api/users/login", async (req, res) => {
  const registrationData = req.body;

  const team = new Team(registrationData)
    
  team
    .save()
    .then((result) => console.log(result._id))
    .catch((err) => console.log(err));
});


// DELETE
// - /api/teams for delete users 

app.delete('/api/users/:id', (req, res) => {
  let userId = req.params.id;

  Team.findByIdAndDelete(userId)
    .then((data) => res.json({ message: "User deleted" }))
    .catch((err) => console.log(err));
});






