 {/* first section */}
 <div className='pt-20 lg:grid lg:grid-cols-[1fr,2fr]'>
 <div><img className='w-[400px] h-[300px] hidden lg:block' src='https://www.hellomonday.com/assets/images/about/products.gif' alt='gif blackwhite'></img>
 </div>
 <div>
     <h2 className='text-[#E2B6DE]'> we make</h2>


     <h1 className='text-6xl '> events</h1>
     <p className="text-lg mt-16">We make better products and make products better. From design and innovation sprints to UX design sprints and marathons, we create things that work for users and brands. Our approach was agile before they called it agile, finding innovation through structured ideation, prototyping and user-testing. Over the past couple of years, we’ve dived deep into machine learning and AI, but always with one question in mind: how does it make life better for humans?</p>
     <a href="Gallery" > <h2 className='mt-10 underline cursor-pointer'>  View Gallery</h2></a>
     {/* two images here */}
     <div className='flex'>
         <div className='mr-5 mt-20 h-[300px] w-[180px] lg:h-[300px] lg:w-[240px] relative'>
             <Image src={landing1} width={170} layout="fill" objectFit='cover' className='relative'
                 height={300} alt='event picture'></Image>
         </div>
         <div className='mt-20 h-[300px] w-[180px] lg:h-[300px] lg:w-[240px] relative'>  <Image src={landing2} width={170} height={300} alt='event picture' layout="fill" objectFit='cover' className='relative'></Image> </div>
     </div>
 </div>


</div>
{/* second section */}
<div className='lg:grid lg:grid-cols-[1fr,2fr] pt-20'>
 <div><img className='w-[400px] h-[300px] hidden lg:block' src='https://www.hellomonday.com/assets/images/about/experiences.gif' alt='gif blackwhite'></img>
 </div>
 <div>
<h2 className=' text-[#E2B6DE]'> we make</h2>
     <h1 className='text-6xl '> Experiences</h1>
     <p className="text-lg mt-16">We tell stories with images, film, 360, virtual reality, augmented reality, 3D graphics and that magical technology called language. We don’t see a dividing line between ‘digital’ and ‘real’ – do it right and digital is real. Immersive, emotional, joyful, memorable, magical. We love coming up with new, meaningful ways to make a human connection.</p>
     <a href="clientHome" > <h2 className='mt-10 underline cursor-pointer'>  View Recent Events</h2></a> 
     {/* two images here */}
     <div className='flex'>
         <div className='mr-5 mt-20 h-[300px] w-[180px] lg:h-[300px] lg:w-[240px] relative'> 
             <Image src={exp1} layout="fill" objectFit='cover' className='relative' alt='event picture'></Image></div>
             
            
         <div className= ' mt-20 h-[300px] w-[180px] lg:h-[300px] lg:w-[240px] relative'>  <Image layout="fill" objectFit='cover' className='relative'  src={exp2} width={180} height={300} alt='event picture'></Image></div>
     </div>
 </div>
</div>
{/* third section */}
<div className='lg:grid lg:grid-cols-[1fr,2fr]'>
<div><img className='w-[400px] h-[300px] hidden lg:block' src='https://www.hellomonday.com/assets/images/about/branding.gif' alt='gif blackwhite'></img>
 </div>
 <div>
 <h2 className='mt-28 text-[#E2B6DE]'> we got</h2>
 <h1 className='text-6xl '> exciting ideas   </h1>
 <p className="text-lg mt-16">We tell stories with images, film, 360, virtual reality, augmented reality, 3D graphics and that magical technology called language. We don’t see a dividing line between ‘digital’ and ‘real’ – do it right and digital is real. Immersive, emotional, joyful, memorable, magical. We love coming up with new, meaningful ways to make a human connection.</p>
 <h2 className=' underline cursor-pointer mt-10'>  View Recent Events</h2>
 {/* two images here */}
 <div className='flex'>
     <div className='mr-5 mt-20 h-[300px] w-[180px] lg:h-[300px] lg:w-[240px] relative'>
         <Image src={shinny} layout="fill" objectFit='cover' className='relative' width={180} height={300} alt='event picture'></Image> </div >
   <div className='mt-20 h-[300px] w-[180px] lg:h-[300px] lg:w-[240px] relative'> <Image src={shinny1} layout="fill" objectFit='cover' className='relative' width={180} height={300} alt='event picture'></Image></div> 
 </div>
 </div>
</div>