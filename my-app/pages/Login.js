import React from 'react'
import axios from 'axios';

import { useEffect} from 'react'
import Router from "next/router";

function Login() {







  const [state, setState] = React.useState({
    Email: "",
    Password: "",
})

function myFunction() {
   
    console.log(state)
 
    axios.post('http://localhost:4001/Login',state)
    .then(function (response) {
        Router.push("/layout");
        localStorage.setItem("email",state.Email)
        console.log("good");
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function handleChange(evt) {
    const value = evt.target.value;
    setState({
        ...state,
        [evt.target.name]: value
    });
  console.log(state)

}






  return (
    <div>
    
        <img
          src="wave.png"
          class="fixed hidden lg:block inset-0 h-full"
          // style={"z-index: -1"}
        />
        <div
          class="w-screen h-screen flex flex-col justify-center items-center lg:grid lg:grid-cols-2"
        >
          <img
            src="unlock.svg"
            class="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto"
          />
          <div class="flex flex-col justify-center items-center w-1/2">
            <img src="avatar.svg" class="w-32" />
            <h2
              class="my-8 font-display font-bold text-3xl text-gray-700 text-center"
            >
              Welcome back
            </h2>
            <div class="relative">
              <i class="fa fa-user absolute text-primarycolor text-xl"></i>
              <input
              onChange={handleChange}
               name='Email'
                type="text"
                placeholder="Email"
                class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500  text-lg"
              />
            </div>
            <div class="relative mt-8">
              <i class="fa fa-lock absolute text-primarycolor text-xl"></i>
              <input
              onChange={handleChange}
                name='Password'
                type="password"
                placeholder="password"
                class="pl-8 border-b-2 font-display focus:outline-none focus:border-primarycolor transition-all duration-500  text-lg"
              />
            </div>
            <a href="#" class="self-end mt-4 text-gray-600 font-bold"
            >Forgot password?</a
            >
            <button
             onClick={myFunction} 
              href="#"
              class="py-3 px-20 bg-primarycolor rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500"
            >Login</button>
          </div>
        </div>
     



    </div>
  )
}

export default Login


