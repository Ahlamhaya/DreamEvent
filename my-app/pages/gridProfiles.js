import React from 'react'
import { useRouter } from "next/router"
import axios from 'axios';
import Rating from '../components/Rating';
import Add from '../components/Add';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'




function gridProfiles({query}) {
    const router = useRouter()
  const {
    query: { location,
        Events_organised,
        Can_personalize_service
     },
  } = router
  
    //   console.log( Events_organised,location,Can_personalize_service)

const [isLoading, setLoading] = React.useState(true);

      const [data, setData] = React.useState([]);
      var params = {
        Location: location,
        Events_organised: Events_organised,
        Can_personalize_service:Can_personalize_service
      }
      if(params.Location==""){
        delete params.Location
      }
      if(params.Events_organised==""){
        delete params.Events_organised
      }
      if(params.Can_personalize_service==""){
        delete params.Can_personalize_service
      }
     
      const fetchDataCall = async () => {
        let apiReturn = await axios
          .get(`http://localhost:4001/filter-profile`,{

            params: params
          }
          
          
          )
          .then(async function({data}) {
           
            return data.data["profile"];
          })
          .catch(function(error) {
            // console.log(error);
          });
        return apiReturn;
      };
      
      React.useEffect(() => {
        const fetchData = async () => {
            
console.log(location)
            if(location!=undefined){  let response = await fetchDataCall();
                setData(response);
    
                setLoading(false);
    }
          
          };
      
          fetchData();  
      }, [location]);
      

      if (isLoading) {
        
        return <div className="App">Loading...</div>;
      }
    
     
if(data==undefined){
    return <p>There is no Agency That Matches Your Search</p>
  }
   

      return (

    <div>
      <Navbar/> 
  <Add/>
{data?.map((element)=>{


return          <div>
 
<div className=' bg-[#f8f4ee] lg:mx-20 mt-10  lg:flex  block lg:space-x-60 '>
 <div>
  <img className='pt-20 lg:ml-40 rounded-lg lg:h-80 ' src={element.image_url} title="" alt=""></img>
  <h2 className='mt-4 font-bold lg:ml-40'> Email Adress:<span className='text-gray-600 font-normal'>{element.Email}</span> </h2>
  <h2 className='mt-4 font-bold lg:ml-40'> Phone Number:<span className='text-gray-600 font-normal'>{element.Phone_Number}</span> </h2>
  <h3 className=' font-bold lg:ml-40 mt-4'>  Rating:</h3>
  <div className='mb-4 lg:ml-60'>
  
  <Rating/>
  </div>
</div>

<div className='mt-28 lg:pr-20'>
<h1 className='text-3xl font-bold '> Agency Name</h1>

<h1 className='text-xl  mt-4 text-gray-600 '><span className='text-gray-600 font-normal'>{element.Agency_Name}</span> </h1>
<h2 className='font-semibold mt-6'>
About Me:<span className='text-gray-600 font-normal'>{element.Short_description}.</span> 
</h2>
<div className='flex lg:space-x-40 mt-10'>
<div>
<p className='mt-2 font-bold'> Events organised: <span className='text-gray-600 font-normal'>{element. Events_organised}</span></p>
<p className='mt-2 font-bold'>location : <span className='text-gray-600 font-normal'>{element.Location}</span></p>
<p className='mt-2 font-bold'>Capacity of Guests: <span className='text-gray-600 font-normal'>{element.Capacity_of_guests}</span></p>


</div>
<div>
<p className='mt-2 font-bold'>Open to cities: <span className='text-gray-600 font-normal'>{element.Open_to_all_cities} </span></p>
<p className='mt-2 font-bold'>Service personalization: <span className='text-gray-600 font-normal'> {element.Can_personalize_service} </span></p>
<p className='mt-2 font-bold'>Function Hours: <span className='text-gray-600 font-normal'>{element.working_hours} </span></p>

    
    </div>
  

 
</div>



</div>









</div>

</div>
})}







<div className='mt-16'>
  <Footer/>
  </div>
    </div>
  )
}

export default gridProfiles