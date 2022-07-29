import React from 'react'
import axios from 'axios';

import { useEffect} from 'react'
import Router from "next/router";

function newLogin() {

    const [state, setState] = React.useState({
        Email: "",
        Password: "",
    })
    
    function myFunction() {
       
        console.log(state)
     
        axios.post('http://localhost:4001/newLogin',state)
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





            <section class="h-full gradient-form bg-gray-200 md:h-screen">
                <div class="container py-12 px-6 h-full">
                    <div class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div class="xl:w-10/12">
                            <div class="block bg-white shadow-lg rounded-lg">
                                <div class="lg:flex lg:flex-wrap g-0">
                                    <div class="lg:w-6/12 px-4 md:px-0">
                                        <div class="md:p-12 md:mx-6">
                                            <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">

                                                <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                                                    <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                                                    <path
                                                        class="plane-take-off"
                                                        d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                                                    />
                                                </svg>
                                                Dream Event
                                            </a>
                                            <form>
                                                <p class=" pt-10">Please login to your account</p>
                                                <div class="mb-4 pt-10">
                                                    <input
                                                     onChange={handleChange}
                                                     name='Email'
                                                        type="text"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div class="mb-4">
                                                    <input
                                                          onChange={handleChange}
                                                          name='Password'
                                                        type="password"
                                                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                                        id="exampleFormControlInput1"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <div class="text-center pt-1 mb-12 pb-1">
                                                    <button
                                                      onClick={myFunction}
                                                         class="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                                                        type="button"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                        style={{ background: "linear-gradient(to right,#ee7724,#d8363a,#dd3675,#b44593" }}

                                                    >
                                                        Log in
                                                    </button>
                                                    <div className='pt-10'>
                                                    <a className="text-gray-500 pt-10 " href="#!">Forgot password?</a>
                                                    </div>
                                                </div>
                                                <div class="flex items-center justify-between pb-6">
                                                    <p class="mb-0 mr-2">Don't have an account?</p>
                                                  <button
                                                        type="button"
                                                        class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                                        data-mdb-ripple="true"
                                                        data-mdb-ripple-color="light"
                                                    >
                                                        Create One
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    
                                    <div className='mt-20 lg:ml-20'>
                              
                                       <img className='w-[350px] h-[500px] mt-10 pr-6 hidden lg:flex' src='https://zeo.org/static/6fa6e05ae967f8327ee8d30f753bcafa/f09bc/1644075000-seo-3.webp' alt=""></img>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default newLogin