
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from 'cloudinary-react';
import Router from "next/router";

function Profile() {
let stock=""
  const [isLoading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const getProfile =  () => {
    var x = localStorage.getItem("email");
    if (x==undefined){
      Router.push("/");

    }
    axios.get('http://localhost:4001/get-profile?email=' + x)
    .then(({data}) => {
   
      setProfile(data.data.profile)
      
            setLoading(false);
    })
   .catch((error)=>{
      console.log(error);
   });
   
  }

  

  const [imageIds, setImageIds] = useState();
  

  useEffect(() => {
    getProfile();

  }, []);



 






  if (isLoading) {
    return <div className="App">Loading...</div>;
  }


  return (
    <div>






      <div class=" mt-20 ml-20 w-[400px] group cursor-pointer active:opacity-70 transition-opacity duration-300">


        <div class="relative group bg-black rounded-t h-[200px] 
  group-hover:h-[100px] transition-all duration-300">
          <img
            src={profile[0].image_url}
            class="w-full h-full object-cover  transition duration-300"
          />
          {/* <img 
      src="./beach.jpg" 
      class="object-cover absolute w-[160px] bottom-0 opacity-0 group-hover:opacity-100 transform translate-y-3/4 group-hover:translate-y-0 transition duration-300"
    /> */}
          <h1 class="absolute top-1/2 transform -translate-y-1/2 left-5 group-hover:left-52 text-white font-bold text-2xl transition-all duration-300">
          {profile[0].Agency_Name} 
          </h1>
        </div>


        <div class="min-h-[120px] py-3 px-4 bg-white rounded-b relative z-10 shadow text-gray-600">
          <div class="font-semibold mb-1">
            <p> Events organised: <span className='text-black'>{profile[0]. Events_organised}</span></p>
            <p className='mt-2'>location : <span className='text-black'>{profile[0].Location}</span></p>
            <p className='mt-2'>Capacity of Guests: <span className='text-black'>{profile[0].Capacity_of_guests}</span></p>
            <p className='mt-2'>Open to cities: <span className='text-black'>{profile[0].Open_to_all_cities} </span></p>
            <p className='mt-2'>Service personalization: <span className='text-black'> {profile[0].Can_personalize_service} </span></p>
            <p className='mt-2'>Function Hours: <span className='text-black'>{profile[0].working_hours} </span></p>
            <p className=" mt-2 "> Agency Description:<span className='text-black'>{profile[0].Short_description} </span></p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile