import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from 'cloudinary-react';
import Router from "next/router";
import Rating from '../components/Rating';
import Socials from '../components/Socials'
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';




function layout() {
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
      <Navbar/>
    <div className=' bg-[#f8f4ee] lg:mx-20 mt-10  lg:flex  block lg:space-x-60 '>
     <div>
      <img className='pt-20 lg:ml-40 rounded-lg lg:h-80 ' src={profile[0].image_url} title="" alt=""></img>
      <h2 className='mt-4 font-bold lg:ml-40'> Email Adress:<span className='text-gray-600 font-normal'>{profile[0].Email}</span> </h2>
      <h2 className='mt-4 font-bold lg:ml-40'> Phone Number:<span className='text-gray-600 font-normal'>{profile[0].Phone_Number}</span> </h2>
      <h3 className=' font-bold lg:ml-40 mt-4'>  Rating:</h3>
      <div className='mb-4 lg:ml-60'>
      
      <Rating/>
      </div>
    </div>

<div className='mt-28 lg:pr-20'>
<h1 className='text-3xl font-bold '> Agency Name </h1>

<h1 className='text-xl  mt-4 text-gray-600 '><span className='text-gray-600 font-normal'>{profile[0].Agency_Name}</span> </h1>
  <h2 className='font-semibold mt-6'>
  About Me:<span className='text-gray-600 font-normal'>{profile[0].Short_description}.</span> 
  </h2>
  <div className='flex lg:space-x-40 mt-10'>
    <div>
    <p className='mt-2 font-bold'> Events organised: <span className='text-gray-600 font-normal'>{profile[0]. Events_organised}</span></p>
    <p className='mt-2 font-bold'>location : <span className='text-gray-600 font-normal'>{profile[0].Location}</span></p>
    <p className='mt-2 font-bold'>Capacity of Guests: <span className='text-gray-600 font-normal'>{profile[0].Capacity_of_guests}</span></p>


    </div>
    <div>
    <p className='mt-2 font-bold'>Open to cities: <span className='text-gray-600 font-normal'>{profile[0].Open_to_all_cities} </span></p>
    <p className='mt-2 font-bold'>Service personalization: <span className='text-gray-600 font-normal'> {profile[0].Can_personalize_service} </span></p>
    <p className='mt-2 font-bold'>Function Hours: <span className='text-gray-600 font-normal'>{profile[0].working_hours} </span></p>
 
        
        </div>
      
    
     
  </div>
 
  

</div>


 


  
   
  
 
    </div>
    <div className='mt-20'>
   <Footer/>
   </div>
    </div>
  )
}

export default layout