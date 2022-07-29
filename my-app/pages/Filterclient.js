import React from 'react'
import DatePicker from "react-datepicker";
import Navbar from '../components/Navbar'
import "react-datepicker/dist/react-datepicker.css";
import Footer from '../components/Footer' 
import axios from 'axios';
import Link from "next/link"


function Filterclient() {
  const [startDate, setStartDate] = React.useState(new Date());

 
 
  const [state, setState] = React.useState({
   
    Location: "",
    Events_organised: "",
    Can_personalize_service: "",
  
  })



  function handleSubmitFile() {
    if(state.Location==""){
      delete state.Location
    }
    if(state.Events_organised==""){
      delete state.Events_organised
    }
    if(state.Can_personalize_service==""){
      delete state.Can_personalize_service
    }


   console.log(state)
    axios.post('http://localhost:4001/filter-profile', state)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });



}
function handleChange(evt) {
    const value = evt.target.value;
    console.log(evt.target.name)
    setState({
        ...state,
        [evt.target.name]: value
    });

}

  return (
    <div>
      <Navbar />


      <div>
        <h1 className='font-semibold text-center lg:text-5xl text-3xl mb-6 text-[#273041] mt-10 '>
          Tailor-made Matching
          <br />
          To Find Your Agency 
        </h1>
       <p className='text-center text-[#273041]'>Zeo is a digital marketing agency with a team of 50+ consultants. Using modern technology to make data-driven
       <br/> decisions is our competitive advantage. The world's most valuable brands, unicorn startups, and 
       <br/> internet companies prefer to work with us to fulfill their digital potential.</p> 
       <img className='mt-6' src='https://zeo.org/static/d64ae097bf89d91a4a8277df2a659798/1609311090-homepage-hero.svg'></img>
      </div>

















      <div className=' flex items-center justify-center mt-20'>
        <form class="w-full max-w-lg ">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3  md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Event Type
              </label>

              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={handleChange} required name='Events_organised'>
                  <option value="" disabled selected hidden>Select event type</option>
                  <option>Wedding</option>
                  <option>Baby-Shower</option>
                  <option>Birthday</option>
                  <option>Conference</option>
                  <option>Pic-Nic</option>
                  <option>Engagement</option>
                  <option>Proposal</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3  md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Location
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={handleChange} name='Location'>
                  <option value="" disabled selected hidden>Choose a city</option>
                  <option>casablanca</option>
                  <option>rabat</option>
                  <option>fes</option>
                  <option>tanger</option>
                  <option>dakhla</option>
                  <option>marrakech</option>

                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3  md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                How Many Guests?
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={handleChange}>
                  <option value="" disabled selected hidden>Pick a number</option>
                  <option>less than 5 People</option>
                  <option>5-10 People</option>
                  <option>10-30 People</option>
                  <option>30-50 People</option>
                  <option>More Than 50 People</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3  md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Time Lapse
              </label>
              <div>
                <div class="relative block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ">
                  <input className='bg-gray-200' type="date" id="start" name="trip-start"
                    value="2022-07-22"
                    min="2022-01-01" max="2040-12-31"></input>

                </div>

              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3  md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                Estimated Budget
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={handleChange}>
                  <option>Enter budget </option>
                  <option>less than 500Dh</option>
                  <option>500-1500Dh</option>
                  <option>1500-3000Dh</option>
                  <option>3000-8000Dh</option>
                  <option>More than 8000Dh</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-3  md:mb-0">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                require customization?
              </label>
              <div class="relative">
                <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" onChange={handleChange} name="Can_personalize_service">
                  <option value="" disabled selected hidden>Service Personalization</option>
                  <option>yes</option>
                  <option>no</option>

                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                Any Other Specifications?
              </label>
              <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" placeholder="" onChange={handleChange}></input>
              <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
            </div>
          </div>

        </form>
      </div>
      <div className='text-center'>
      <Link  href={{
        pathname: "/gridProfiles",
        query: { location: state.Location,
          Events_organised: state.Events_organised,
          Can_personalize_service: state.Can_personalize_service
         },
      }}>
      <a className="bg-[#cc0a4d]  text-white font-bold py-2 px-4 rounded-full mt-6" >          Find Your Match
</a>
        </Link>
        
      </div>
      <div className='mt-4'>
      <Footer  />
      </div>
    </div>
  )
}

export default Filterclient