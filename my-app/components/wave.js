import React from 'react'
import styles from './gradient.module.css'
import Navbar from './Navbar'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'


function wave() {
  return (
    <div>
      <body class="leading-normal tracking-normal  " className={styles.gradient} >
        <Navbar />
        <div className='text-white'>
          <div class="pt-2">
            <div class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

              <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                <h1 class="my-4 text-5xl font-bold leading-tight">
                  All-in-One platform For Events
                </h1>
                <p class="leading-normal text-2xl mb-8">
                  Connecting People With upcomig Events With Suitable Planners (for a perfect Match!)
                </p>
                <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Start your search now
                </button>
              </div>

              <div class="w-full md:w-3/5 py-12 ">
                <img class="w-full  md:w-4/5 z-50" src="https://digitaltoucan.com/wp-content/uploads/2021/03/graphic-pillar-okrat-chapter-1-new.svg" />
              </div>
            </div>
          </div>
          <div class="relative -mt-12 lg:-mt-24">
            <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                  <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                </g>
                <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                  <path
                    d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <section class="bg-white border-b py-8">
            <h1 class=" italic w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Services
            </h1>
            {/* first gif */}
            <div className=' lg:grid lg:grid-cols-[1fr,2fr]'>

              <img className='h-auto  w-96 lg:ml-12' src="https://digitaltoucan.com/wp-content/uploads/2021/07/graphic-pillar-jse-magic-chapter-1.svg"></img>
              <p className='text-black text-gray-800 pl-2 lg:mt-20 lg:text-xl lg:mx-20'> Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
            </div>
            {/* second gif*/}
            <div className=' lg:grid lg:grid-cols-[2fr,1fr] mt-12'>

              <img className='h-auto  w-96  lg:order:last' src="https://digitaltoucan.com/wp-content/uploads/2021/07/graphic-pillar-jse-magic-chapter-3.svg"></img>
              <p className='lg:order-first lg:mx-20  lg:mt-20  text-black text-gray-800 pl-2  lg:text-xl '> Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
            </div>

            {/* third gif */}
            <div className=' lg:grid lg:grid-cols-[1fr,2fr] mt-12'>

              <img className='h-auto  w-96 lg:ml-12' src="https://digitaltoucan.com/wp-content/uploads/2021/07/graphic-pillar-jse-magic-chapter-2.svg"></img>
              <p className='text-black text-gray-800 pl-2 lg:mt-20 lg:text-xl lg:mx-20'> Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
            </div>


          </section>



          {/* other section */}
          <section class="bg-white  py-8 ">
            <div class="">
              <h1 class=" italic w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 ">
                Title
              </h1>
              <div className='lg:grid lg:grid-cols-3 mt-6 '>
                <div className='lg:mr-40 '>
                  <Card1 />
                </div>
                <div className='lg:mr-36  '>
                  <Card2 />
                </div>
                <div className='lg:mr-36  '>
                  <Card3 />
                </div>

              </div>

            </div>
          </section>
          {/* end of flip cards */}

          {/* fourth section */}

          <div className='lg:grid lg:grid-cols-2 bg-white py-8 '>
            <div className='mt-24 lg:ml-40 ml-6'>
              <h2 className='text-gray-800 font-bold text-lg'>
                For Businesses
              </h2>
              <h3 className='text-gray-800 text-3xl  font-semibold mt-2'>
                What's in It
                For you?
              </h3>
              <p className='text-gray-800 lg:w-96 lg:mt-4 mt-10'>
                It is extremely important not only to reach the target audience but also to keep this audience. Achieving this success with engaging content and the right distribution strategies is the main focus of content marketing.
              </p>


            </div>
            <div className='mt-24 lg:ml-20 ml-6'>
              <h2 className='text-gray-800 font-bold text-lg'>
                For Clients
              </h2>
              <h3 className='text-gray-800 text-3xl  font-semibold mt-2'>
                What's in It
                For you?
              </h3>
              <p className='text-gray-800 lg:w-96 lg:mt-4 mt-10'>
                It is extremely important not only to reach the target audience but also to keep this audience. Achieving this success with engaging content and the right distribution strategies is the main focus of content marketing.
              </p>


            </div>





          </div>


































          <div className=''>
            <svg className='' class="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero " >
                  <g class="wave" fill="#f8fafc" >
                    <path
                      d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"
                    ></path>
                  </g>
                  <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
                    <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
                      <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                      <path
                        d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                        opacity="0.100000001"
                      ></path>
                      <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <section class="container mx-auto text-center py-6 mb-12">
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
              Grow your Business
            </h1>
            <div class="w-full mb-4">
              <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <h3 class="my-4 text-3xl leading-tight">
              Create your profile for more visibility
            </h3>
            <button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Sign in
            </button>
          </section>

          <footer class="bg-white">
            <div class="container mx-auto px-8">
              <div class="w-full flex flex-col md:flex-row py-6">
                <div class="flex-1 mb-6 text-black">
                  <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">

                    <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                      <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                      <path
                        class="plane-take-off"
                        d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                      />
                    </svg>
                    Dream Event
                  </a>
                </div>
                <div class="flex-1">
                  <p class="uppercase text-gray-500 md:mb-6">Links</p>
                  <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                    </li>
                  </ul>
                </div>
                <div class="flex-1">
                  <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                  <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                    </li>
                  </ul>
                </div>
                <div class="flex-1">
                  <p class="uppercase text-gray-500 md:mb-6">Social</p>
                  <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                    </li>
                  </ul>
                </div>
                <div class="flex-1">
                  <p class="uppercase text-gray-500 md:mb-6">Company</p>
                  <ul class="list-reset mb-6">
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                    </li>
                    <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                      <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </div>
  )
}

export default wave