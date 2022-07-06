import React from 'react'
import landing1 from '../assets/landing1.jpg'
import landing2 from '../assets/landing2.jpg'
import exp1 from '../assets/exp1.jpg' 
import exp2 from '../assets/exp2.jpg'
import shinny from '../assets/shinny.jpg'
import shinny1 from '../assets/shinny1.jpg'
import Image from 'next/Image'


function Body() {
    return (
        <div className='mx-4'>
            <div className='pt-20 '>
                <h1 className='font-semibold text-center lg:text-5xl text-3xl mb-6 '>
                We’re obsessed with 
                <br/>
                customer success.
                </h1>
                <div className='text-center'>
                <p className="text-lg font-meduim  " >We make event making accesible and fun 
                <br/>
                by providing a platform where excited planners(like you) 
                <br/>
                find over 5000 local professional event agencies .</p>
                <div className='lg:ml-96'>
                <img className='lg:w-[600px] lg:h-[400px]  '
                   src='https://digitaltoucan.com/wp-content/uploads/2021/02/featured-about.svg'>
                </img>
                </div>
                </div>
            </div>

            {/* card */}
                <h2 className='text-center font-semibold lg:text-4xl mt-28 italic'> It's all about exceptional support.</h2>
            <div className='lg:grid lg:grid-cols-2 lg:mx-48 mt-12'>
                {/* first card */}
             <div className='bg-[#f8f4ee] h-auto w-auto'>
                <div className='mx-20'>
                <h2 className='mt-10 text-2xl'>Our Mission </h2>
                <p className='mt-4 text-gray-600'>Our team of technology experts are here to help. Whether that’s bringing Jira data to life in creative ways, or providing dedicated product support when you need it, we take great pride in helping our users get the best experiences.</p>
                </div>
                <div className=''>
                <img className='w-[400px] h-[300px]' src='gif-unscreen.gif'></img>
                </div>
             </div>

            {/* second card */}


            <div className='bg-[#f8f4ee] h-auto w-auto mt-6 lg:mt-0 lg:ml-10'>
                <img className=' w-[400px] h-[300px]' src='gif2-unscreen.gif'></img>
                
            
                <div className='mx-20'>
                <h2 className=' text-2xl'>Our Mission </h2>
                <p className='mt-4 text-gray-600'>Our team of technology experts are here to help. Whether that’s bringing Jira data to life in creative ways, or providing dedicated product support when you need it, we take great pride in helping our users get the best experiences.</p>
                </div>


            </div>
            </div>
 

 <div>
 <h2 className='text-center font-semibold lg:text-4xl mt-28 italic'> How to start?</h2>
 {/* step one */}
 <div className='mt-8 lg:ml-60 flex'>
    <div className=''>
    <h2 className='text-[#F59229] font-bold text-lg italic'>Step 1</h2>
    <h3 className='mt-2 text-xl font-bold '> Create a Profile Using Our Form</h3>
    <p className='mt-4 text-gray-600'> Determine if OKR is needed in your teams and
        <br/>
         organization. If the issues stated in Chapter 1 are
         <br/>
          rampant, perhaps OKR is key.</p>
          </div>
          {/* graph here */}
          <div className='flex'>
            <img className='lg:h-20 lg:w-40  h-16 w-20 mt-28 lg:ml-14' src='graph1.jpeg'></img>
          </div>
 </div>
  {/* step two */}
 <div>
    <div className='lg:pl-96  '>
 <div className='lg:pl-60 '>
    <h2 className='text-[#F59229] font-bold text-lg italic mt-4'>Step 2</h2>
    <h3 className='mt-2 text-xl font-bold'> Create a Profile Using Our Form</h3>
    <p className='mt-4 text-gray-600'> Determine if OKR is needed in your teams and
        <br/>
         organization. If the issues stated in Chapter 1 are
         <br/>
          rampant, perhaps OKR is key.</p>
          </div>
         <div className=''>
         <img className='lg:h-20 lg:w-40  h-16 w-20   ' src='graph2.jpeg'></img>

            </div> 
          </div>

 </div>

{/* step three */}
 <div className='mt-8 lg:ml-60 flex'>
    <div className=''>
    <h2 className='text-[#F59229] font-bold text-lg italic'>Step 3</h2>
    <h3 className='mt-2 text-xl font-bold '> Create a Profile Using Our Form</h3>
    <p className='mt-4 text-gray-600'> Determine if OKR is needed in your teams and
        <br/>
         organization. If the issues stated in Chapter 1 are
         <br/>
          rampant, perhaps OKR is key.</p>
          </div>
          {/* graph here */}
          <div className='flex'>
            <img className='lg:h-20 lg:w-40  h-16 w-20  mt-40 lg:ml-14' src='graph1.jpeg'></img>
          </div>
 </div>

 {/* step four */}
 <div className='lg:flex block mt-6 lg:ml-96'>
 <div>
<img className='h-60 w-60 ' src='graph22.png'></img>
</div>
 <div className='ml-4 mt-4  '>
    <h2 className='text-[#F59229] font-bold text-lg italic'>Step 4</h2>
    <h3 className='mt-2 text-xl font-bold '> Create a Profile Using Our Form</h3>
    <p className='mt-4 text-gray-600'> Determine if OKR is needed in your teams and
        <br/>
         organization. If the issues stated in Chapter 1 are
         <br/>
          rampant, perhaps OKR is key.</p>
          </div>
    
 </div>

 </div>

<div className='bg-[#f5f8fc] w-auto h-auto pt-20 mt-20 lg:flex block'>
   
<div className='lg:ml-20 '>
 <img
  src="mehdi's face.jpg"
  class="rounded-full w-72 h-72 "
  alt="Avatar"
/>

<h2 className='mt-6 text-[#273041]'>According to top users:</h2>
<p className='mt-4 text-[#273041] lg:text-3xl font-bold lg:w-96'>Dream Event increased
    
     my catering business visibility
     and booking by 30% in 2022 </p>

     <h3 className='mt-10 text-[#273041] lg:w-96'>We organize Digitalzone conference since 2013 to bring the brightest minds of digital marketing, like Rand Fishkin, Wil Reynolds, Aleyda Solis and Brian Dean with Europe's digital marketing community together.

It is not only a conference but also a monthly meetup where people can share new insights with others. Proudly speaking, we have reached more than 50K+ marketers within 10 years and learned together to be better marketers.</h3>

<button class="bg-[#cc0a4d]  text-white font-bold py-2 px-4 rounded-full mt-6">
  View  More
</button>
</div>
<div className='lg:ml-60 lg:mt-40'>
   < img src='https://zeo.org/static/75dfc6f7a3aade922db34d61e985edbc/1584859680-zeo-digitalzone-meetup.svg'></img>
</div>
</div>           

























































           



























        </div>
    )
}

export default Body