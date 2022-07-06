import React from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/Image'
import homepic1 from '../assets/homepic1.jpg'
import { FcOvertime } from "react-icons/fc";
import { FcBinoculars } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcBusinesswoman } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcGallery } from "react-icons/fc";
import Footer from '../components/Footer'

function clientHome() {
  return (
    <div >
      <Navbar />
      <div className=' lg:grid lg:grid-cols-2 lg:mt-0 mt-10'>
        <div className=''>
          <Image className='lg:order-last	rounded-tl-extraLarge rounded-br-extraLarge ' src={homepic1} alt='table of gifts'></Image>


        </div>
        <div className='mx-8 lg:order-first'>
          <div className='pt-20 '>
            <h1 className='text-5xl w-80'> Let's Find your Event Team</h1>
            <h2 className='mt-10 text-xl lg:w-96 text-[#746E8C]'>Search over 250,000 local professionals with reviews, pricing, availability, and more</h2>
          </div>
          <div className='pt-6'>
         <a href="Filterclient" > <button class="bg-[#FF3597] hover:bg-[#FF3597] text-white font-bold py-2 px-4 lg:py-4 border rounded">
              Start Your Search Now
            </button></a> 
          </div>
        </div>
      </div>
      {/* second section */}
      <div className='lg:flex lg:space-x-24 pt-20 lg:mx-16 mx-8'>
        <div >
          <FcOvertime size={32} />
          <h2 className='text-3xl mt-4'> less time</h2>
          <h3 className='text-[#746E8C] w-80 text-xl mt-4'> Democratize your roadmap by setting goals with context, instead of creating a wall of tasks.</h3>

        </div>
        <div >
          <FcBinoculars size={32} />
          <h2 className='text-3xl mt-4'> Search easily</h2>
          <h3 className='text-[#746E8C] w-80 text-xl mt-4'> Democratize your roadmap by setting goals with context, instead of creating a wall of tasks.</h3>

        </div>


        <div >
          <FcIdea size={32} />
          <h2 className='text-3xl mt-4'> Search easily</h2>
          <h3 className='text-[#746E8C] w-80 text-xl mt-4'> Democratize your roadmap by setting goals with context, instead of creating a wall of tasks.</h3>

        </div>
      </div>
      <div className='lg:grid lg:grid-cols-2 mt-28'>
        {/* colored division */}

        <div class="  flex items-center justify-center lg:order-last	 ">
          <div class="relative w-full max-w-lg">
            <div className='hidden lg:block '>
              <div class="  absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="   absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="  absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>


            {/* animation ends */}
            <div class=" m-8 relative lg:space-y-4 shadow-lg">
              {/* first */}
              <div class="p-5 lg:p-8 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="text-[#746E8C] font-medium lg:text-xl  rounded"> Start New Events anytime</div>
                </div>
                <div>
                  <div class="w-24 h-6 rounded-lg bg-purple-300 text-[#325F8C] text-center"> Long Term</div>
                </div>
              </div>
              {/* second */}
              <div class="p-5 lg:p-8  bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="text-[#746E8C] font-medium lg:text-xl  rounded"> Start New Events anytime</div>
                </div>
                <div>
                  <div class="w-24 h-6 rounded-lg bg-yellow-300 text-[#FB9A0E] text-center"> Short Term</div>
                </div>
              </div>
              {/* third */}
              <div class="p-5 lg:p-8 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="text-[#746E8C] font-medium lg:text-xl  rounded"> Search for agencies nearby</div>
                </div>
                <div>
                  <div class="w-24 h-6 rounded-lg bg-pink-300 text-center text-[#FB0EE3]">Urgent</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* text here */}
        <div className='lg:order-first mt-20 lg:ml-40 mx-6'>
          <h2 className='text-5xl w-80 '>Set and Plan Every Detail </h2>
          <p className='mr-4 mt-6 font-meduim text-[#746E8C] text-xl  '>Turn your project management into a source of information instead of a list of frustration. Communicate the timeframe & impact of your goals and democratize your roadmap.</p>
        </div>
      </div>

      {/* second animation */}
      <div className='lg:grid lg:grid-cols-2 mt-40'>
        <div class=" flex items-center justify-center  ">
          <div class="relative w-full max-w-lg">
            <div className='hidden lg:block '>
              <div class="  absolute top-0 -left-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div class="   absolute top-0 -right-4 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div class="  absolute -bottom-8 left-20 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>


            {/* animation ends */}
            <div class=" m-8 relative lg:space-y-4 shadow-lg">
              {/* first */}
              <div class="p-5 lg:p-8 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="text-[#746E8C] font-bold text-lg rounded"> Set your budget</div>
                </div>
                <div>
                  <div> <FcBusinesswoman size={32} /></div>
                </div>
              </div>
              {/* second */}
              <div class="p-5 lg:p-8  bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="text-[#746E8C] font-bold text-lg rounded"> Define the location</div>
                </div>
                <div>
                  <div ><FcBusinessman size={32} /> </div>
                </div>
              </div>
              {/* third */}
              <div class="p-5 lg:p-8 bg-white rounded-lg flex items-center justify-between space-x-8">
                <div class="flex-1">
                  <div class="text-[#746E8C] font-bold text-lg rounded"> Add your personalized details</div>
                </div>
                <div>
                  <div> <FcGallery size={32} /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* text here */}
        <div className=' mt-20  mx-6 '>
          <h2 className='text-5xl w-80 '>Set and Plan Every Detail </h2>
          <p className='mr-4 mt-6 font-meduim text-[#746E8C] text-xl  '>Turn your project management into a source of information instead of a list of frustration. Communicate the timeframe & impact of your goals and democratize your roadmap.</p>
        </div>
      </div>

      {/* last text */}
      <div className='mt-40 mx-6 lg:text-center'>
        <h2 className='text-5xl'>Creating bespoke events</h2>
        <h3 className=' font-meduim text-[#746E8C] text-xl   mt-6 '>Reduce the noise and focus on what really matters the most. Your goals.</h3>
        <button class=" mt-6 bg-[#FFCE51] text-white font-bold py-2 px-20 lg:py-4 border  rounded">
          Start here
        </button>
      </div>

    <div className='mt-20'>
      <Footer />
      </div>












    </div >
  )
}

export default clientHome