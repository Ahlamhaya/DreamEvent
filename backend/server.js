const express = require('express');
const { cloudinary } = require('./utils/cloudinary');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const ProfileModel = require('./models/Profile')
const bcrypt = require("bcrypt")


const saltRounds = 10;

const PORT = 4001;


app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
mongoose.connect('mongodb+srv://ahlam:Ahlamhaya2022@cluster0.0s2yg.mongodb.net/users?retryWrites=true&w=majority', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

// get method


//  post method
 app.post('/api/upload', async (req, res) =>{
    try{
        const fileStr = req.body.data;
        const uploadResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'dreamfolder',
        });
        console.log(uploadResponse);
        res.json({ msg: uploadResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ err: 'Something went wrong' });

    }
 }
 
 
 )
app.post('/add-profile', async (req, res) => {
    try {
        const hashedPwd = await bcrypt.hash(req.body.Password, saltRounds);

        const insertResult = await ProfileModel.create({
            First_Name: req.body.First_Name,
            Last_Name: req.body.Last_Name,
            Email: req.body.Email,
            Password: hashedPwd,
            Agency_Name: req.body.Agency_Name,
            Phone_Number: req.body.Phone_Number,
            Location: req.body.Location,
            Events_organised: req.body.Events_organised,
            Capacity_of_guests: req.body.Capacity_of_guests,
            Open_to_all_cities: req.body.Open_to_all_cities,
            Can_personalize_service: req.body.Can_personalize_service,
            working_hours: req.body.working_hours,
            Short_description: req.body.Short_description,
            image_url: req.body.image_url,  
            



        });
        res.send(insertResult);

    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})


//   get method
app.get('/get-profile', async (req, res) => {

    const profile = await ProfileModel.find({ Email: req.query.email })
    console.log(profile)
    try {
        if (profile.length == 0) {
            res.status(404).json({
                status: 'Failed',
                message: err
            })
        }
        else {
            console.log("found")
            res.status(201).json({
                status: 'Success',
                data: {
                    profile
                }
            })
        }
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})

// get for filter
app.get('/filter-profile', async (req, res) => {
  let data={};
//   let Event=req.body.Events_organised
//   console.log(Event)
  if(req.query.Location !== null && req.query.Location !== ''){

    data.Location=req.query.Location

  }
  
  if( req.query.Events_organised!=undefined ){
    console.log('not enter')
    data.Events_organised=req.query.Events_organised
  }
  if( req.query.Can_personalize_service!=undefined){
    data.Can_personalize_service=req.query.Can_personalize_service
  }
  console.log(data)











    const profile = await ProfileModel.find(data)
    try {
        if (profile.length == 0) {
            res.status(404).json({
                status: 'Failed',
                message: err
            })
        }
        else {
            console.log("found")
            res.status(201).json({
                status: 'Success',
                data: {
                    profile
                }
            })
        }
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }







})








//    delete method
app.get('/delete-profile', async (req, res) => {
    const profile = await ProfileModel.findOneAndDelete({ username: "ahlam" })
    try {
        res.status(200).json({
            status: 'Success',
            data: {
                profile
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'Failed',
            message: err
        })
    }
})


app.post("/newLogin", async (req, res) => {
    try {
      const user = await ProfileModel.findOne({ Email: req.body.Email });
      console.log(user);
      if (user) {
        const cmp = await bcrypt.compare(req.body.Password, user.Password);
        if (cmp) {
          //   ..... further code to maintain authentication like jwt or sessions
          res.send("Auth Successful");
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
      } else {
        res.status(401).json({ error: 'Unauthorized' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error Occured");
    }
  });





app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})