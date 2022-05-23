const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const ProfileModel = require('./models/Profile')

const PORT = 4001;
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://ahlam:Ahlamhaya2022@cluster0.0s2yg.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//  post method
app.post('/add-profile', async(req,res) => {
    const Profile = new ProfileModel(req.body)
    try{
        await Profile.save()
        res.status(201).json({
            status: 'Success',
            data : {
                Profile
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})


//   get method
app.get('/get-profile', async (req,res) => {
    const profile = await ProfileModel.find({username:req.query.username})
    console.log(profile)
    try{
      if(profile.length==0){
        res.status(404).json({
            status: 'Failed',
            message : err
        })
      }
      else{
          console.log("found")
        res.status(201).json({
            status: 'Success',
            data : {
                profile
            }
        })
      }
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})






//    delete method
app.get('/delete-profile', async (req,res) => {
    const profile = await ProfileModel.findOneAndDelete({ username: "ahlam" })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                profile
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })