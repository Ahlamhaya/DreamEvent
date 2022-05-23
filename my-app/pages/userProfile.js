import React from 'react'
import { TiUserAdd } from "react-icons/ti";
import Foooter from '../components/Foooter'




function userProfile() {
    const [state, setState] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirm: "",
        agencyname: "",
        phonenumber: "",
        Location: "",
        events: "",
        guests: "",
        cities: "",
        personalization: "",
        hours: "",
        description: "",


    })
    function handleSubmit(){
        console.log(state)
    }
    function handleChange(evt) {
        const value = evt.target.value;
        setState({
            ...state,
            [evt.target.name]: value
        });
       
    }


    return (


        <div>


            <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">

                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">

                        <div >
                            <div class="image-upload">
                                <label for="file-input">
                                    <img className='h-40s w-60' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                                </label>

                                <input name="file-input" type="file" accept="image/*" />
                            </div>


                        </div>

                        <div class="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 class="pt-4 text-2xl text-center">Create a Profile</h3>
                            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                            First Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="firstName"
                                            type="text"
                                            placeholder="First Name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                            Last Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="lastName"
                                            type="text"
                                            placeholder="Last Name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Email
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        onChange={handleChange}

                                    />
                                </div>
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                            Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="password"
                                            type="password"
                                            placeholder="******************"
                                            onChange={handleChange}

                                        />
                                        <p class="text-xs italic text-red-500">Please choose a password.</p>
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Confirm Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="confirm"
                                            type="password"
                                            placeholder="******************"
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Agency Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="agencyname"
                                            type="text"
                                            placeholder="agency namee"
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Phone Number
                                        </label>
                                        <input

                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name=" phonenumber"
                                            type="number"
                                            placeholder="+2126"
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Location
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="location"
                                            type="text"
                                            placeholder="please choose a location"
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Events organised
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="events"
                                            type="text"
                                            placeholder="types"
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Capacity of guests
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="guests"
                                            type="number"
                                            placeholder="choose a number"
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Open to all cities?
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="cities"
                                            type="text"
                                            placeholder="Yes/No"
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Can personalize service?
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="personalization"
                                            type="number"
                                            placeholder="Yes/No"
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            working hours?
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="hours"
                                            type="text"
                                            placeholder="select hours"
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>

                                <div class="">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                        Short description about your agency
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="description"
                                        type="text"
                                        placeholder="story, expertise and your services"
                                        onChange={handleChange}

                                    />
                                </div>

                                <div class="mb-6 text-center">
                                    <button
                                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="button"  onClick={handleSubmit}
                                    >
                                        Register Account
                                    </button>
                                </div>
                                <hr class="mb-6 border-t" />
                                {/* <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        Forgot Password?
                                    </a>
                                </div> */}
                                <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="./index.html"
                                    >
                                        Already have an account? Login!
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>



            <div className='mt-20'>
                <Foooter />
            </div>

        </div>
    )
}

export default userProfile