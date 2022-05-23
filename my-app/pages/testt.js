import React from 'react'

function testt() {
  return (



  <div>

    <div class="bg-gray-50 flex items-center justify-center  ">
      <div class="relative w-full max-w-lg">
        <div className='hidden lg:block '>
          <div class="  absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div class="   absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div class="  absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>


        {/* animation ends */}
        <div class="m-8 relative lg:space-y-4">
          {/* first */}
          <div class="p-5 lg:p-8 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div class="flex-1">
            <div class="text-[#746E8C] font-medium lg:text-xl text-sm rounded"> Start New Events anytime</div>
            </div>
            <div>
              <div class="w-24 h-6 rounded-lg bg-purple-300 text-[#325F8C] text-center"> Long Term</div>
            </div>
          </div>
          {/* second */}
          <div class="p-5 lg:p-8  bg-white rounded-lg flex items-center justify-between space-x-8">
            <div class="flex-1">
              <div class="text-[#746E8C] font-medium lg:text-xl text-sm rounded"> Start New Events anytime</div>
            </div>
            <div>
            <div class="w-24 h-6 rounded-lg bg-yellow-300 text-[#FB9A0E] text-center"> Short Term</div> 
            </div>
          </div>
          {/* third */}
          <div class="p-5 lg:p-8 bg-white rounded-lg flex items-center justify-between space-x-8">
            <div class="flex-1">
            <div class="text-[#746E8C] font-medium lg:text-xl text-sm  rounded"> Search for agencies nearby</div>
            </div>
            <div>
            <div class="w-24 h-6 rounded-lg bg-pink-300 text-center text-[#FB0EE3]">Urgent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* text here */}
    <div>
<h2 className='text-4xl pt-10'>
  Set and Plan Every Detail
</h2>



    </div>
























    </div>

 
  








  )
}

export default testt