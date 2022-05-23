import React from 'react'

function Footer() {
    return (
        <div className='mx-6 mt-20'>
            <div>
                <h3 className='text-xl'>
                    Dream Event</h3>
                <h3> made with passion
                </h3>
            </div>
            <div className='mt-6'>
                <p>
                    Are you an agency?
                 <a href="addAgency">  <span className='text-[#C92ED8] cursor-pointer' >  Sign up</span> </a>  on Dream Event to reach more clients and book more events!
                    <h3> <a href="addAgency"><span className='underline'> Start Here</span> </a></h3>
                </p>
            </div>
            <div className='mt-10'>
                <hr
                    style={{
                        color: "black",
                        backgroundColor: "black",
                        height: 2,

                    }}
                />
            </div>
            <div>
                <h3> privacy policy</h3>
                <h3> terms of use</h3>
                <h3> customer service</h3>
                <h3>
                    ©2005-2022 XO Group Inc.</h3>
            </div>







        </div>
    )
}

export default Footer