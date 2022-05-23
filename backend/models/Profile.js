const mongoose = require('mongoose');
const  { Schema } = mongoose;
mongoose.Promise = global.Promise;

let ProfileSchema = new Schema({
    First_Name: {
        type: String
    },
    Last_Name: {
        type: String
    },
    Email: {
        type: String
    },
    Password: {
        type: String
    },
    Confirm_Password: {
        type: String
    },
    Agency_Name: {
        type: String
    },
    Phone_Number: {
        type: String
    },
    Location: {
        type: String
    },
    Events_organised: {
        type: String
    },
    Capacity_of_guests: {
        type: String
    },
    Open_to_all_cities: {
        type: String
    },
    Can_personalize_service: {
        type: String
    },
    working_hours: {
        type: String
    },
    Short_description_about_your_agency: {
        type: String
    },
});
module.exports =
    mongoose.models.Profile || mongoose.model('Profile', ProfileSchema);

