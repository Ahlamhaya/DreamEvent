import React from 'react'
import ReactPlayer from 'react-player'
// 
import host from '../assets/host.jpg'
import Image from 'next/Image'
import styles from "./Image.module.css";
import Reviews from '../components/Reviews'
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import Foooter from '../components/Foooter'
import Navbar from '../components/Navbar'


function addAgency() {
  // function handleclick(e){
  //   console.log(e)
  // }
  return (


    <div className=' '>
         <Navbar/>
      <div className='lg:grid lg:grid-cols-2 lg:flex'>
        <div className='h-[500px] '>
          <video autoPlay muted onClick={(e) => e.target.paused ? e.target.play() : e.target.pause()} loop className='h-[500px] lg:h-screen  object-cover'  >
            <source src="eventvideo.mp4" type="video/mp4" />

            Your browser does not support the video tag.
          </video>


        </div>
        {/* <input type="text"  onClick={(e)=>handleclick(e)}/> */}


        <div className=' lg:bg-black lg:text-white lg:h-screen'>
          <h1 className='lg:mt-40 lg:text-6xl lg:font-normal lg:mx-20 text-3xl font-medium mt-6 ml-4 mr-6   '> Your business, is a pillar of our common space</h1>
       <a href="userProfile" > <button class=" lg:mx-40 mt-6 ml-2 bg-[#D70466]  text-white font-bold py-2 px-28    rounded">
            Add my business
          </button></a> 




        </div>

      </div>

      {/* customer review */}
      <Reviews />
      {/* images here */}
      <div className='mt-20 lg:flex lg:bg-[#F2F2F2] '>
      
          {/* first card */}
          <div className='mt-10  '>
          <div className='text-center  '>
            <Image src={card1} alt="" className='rounded' width={300} height={320}></Image>
            </div>
            <div className='lg:h-44 e '>
              <h3 className="font-bold text-2xl p-4 text-[#484848]  text-center ">   Details and attention </h3>
              <p className=' mx-20 text-center'>Make your business story counts while telling it to the right audience it the right time.</p>
            </div>
          </div>
          {/* second card */}
          <div className='mt-10'>
            <div className='text-center h-[320px]'>
            <Image src={card2} alt="" className='rounded' width={300} height={320}></Image>
            </div>
            <div className='h-44    '>
              <h3 className="font-bold text-2xl p-4 text-[#484848] text-center ">   Details and attention </h3>
             
              <p className=' mx-20 w-60 text-center'>Make your business story counts while telling it to the right audience it the right time.</p>
           
            </div>
          </div>
          {/* third card */}
          <div className='mt-10 '>
          <div className='text-center'>
            <Image src={card3} alt="" width={300} height={320} className='rounded'></Image>
           </div> 
            <div className='h-44 b'>
              <h3 className="font-bold text-2xl p-4 text-[#484848] text-center">   Details and attention </h3>
              <p className=' mx-20 text-center'>Make your business story counts while telling it to the right audience it the right time.</p>
            </div>
        
        </div>
      </div>



      {/* discuss with a team member */}
      <div className='mx-2 mt-20 h-[500px] lg:h-screen lg:w-4/5 lg:mx-28 relative text-xl lg:text-4xl'>
        <div className={styles.container}>
          <Image className={styles.image} layout="fill" objectFit='cover' src={host} alt='team advisory'></Image>

          <h1 className={styles.header}>Questions about terms and steps of adding your business? discuss with a team member</h1>
          <div className='text-[12px] font-bold'><button className={styles.btn}>Contact us</button></div>
        </div>
      </div>












      <div className='mt-20'>
      <Foooter />
      </div>
    </div>


  )
}

export default addAgency
