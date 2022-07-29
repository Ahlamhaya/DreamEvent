
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'

function Reviews() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="mt-20 flex justify-center">
            <Slider className="w-80 text-center"  {...settings}>
                <div className='text-center'>
                    <p className='font-semibold'>"When i integrated DreamEvent, we noticed more visibility and interaction from our target clients"</p>  
                    <span className='italic font-bold s'>Nadia</span>
                    <h3 className='italic font-light'> catering morocco</h3>
                    </div>     
                <div className='text-center'>
                <p className='font-semibold'>"When i integrated DreamEvent, we noticed more visibility and interaction from our target clients"</p>  
                    <span className='italic font-bold s'>Nadia</span>
                    <h3 className='italic font-light'> catering morocco</h3>
                </div>
                <div className='text-center'>
                <p className='font-semibold'>"When i integrated DreamEvent, we noticed more visibility and interaction from our target clients"</p>  
                    <span className=' italic font-bold s'>Nadia</span>
                    <h3 className='italic font-light'> catering morocco</h3>
                </div>
                <div className='text-center'>
                <p className='font-semibold'>"When i integrated DreamEvent, we noticed more visibility and interaction from our target clients"</p>  
                    <span className=' italic font-bold s'>Nadia</span>
                    <h3 className='italic font-light'> catering morocco</h3>
                </div>

            </Slider>
        </div>
    );
}
export default Reviews