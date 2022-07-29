import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


import axios from 'axios';



function userProfile() {
    const [imageurl, setimageurl] = useState('');

    const [state, setState] = React.useState({
        First_Name: "",
        Last_Name: "",
        Email: "",
        Password: "",
        Confirm_Password: "",
        Agency_Name: "",
        Phone_Number: "",
        Location: "",
        Events_organised: "",
        Capacity_of_guests: "",
        Open_to_all_cities: "",
        Can_personalize_service: "",
        working_hours: "",
        Short_description: "",
        image_url: imageurl


    })
    function handleSubmit(link) {
       
        state.image_url = link
        axios.post('http://localhost:4001/add-profile', state)
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

    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [successMsg, setSuccessMsg] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);
        setSelectedFile(file);
        setFileInputState(e.target.value);
    };

    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        };
    };
    const handleSubmitFile = () => {
        console.log('submitting')
        if (!previewSource) return;
        uploadImage(previewSource)
    };
    const uploadImage = async (base64EncodedImage) => {
        console.log(JSON.stringify({ data: base64EncodedImage }));
        try {
            axios.post('http://localhost:4001/api/upload', { data: base64EncodedImage })
                .then(function (response) {

                    handleSubmit(response.data.msg.secure_url)
                })
                .catch(function (error) {
                    console.log(error);
                });

            setFileInputState('');
            setPreviewSource('');
            setSuccessMsg('Image uploaded successfully');
        } catch (err) {
            console.error(err);
            setErrMsg('Something went wrong!');
        }
    };
    return (
<div>
<Navbar/>
        <div className='lg:flex block'>
     

            <div class="container mx-auto">
                <div class=" justify-center px-6 my-12">

                    <div class=" xl:w-3/4">



                        <div class=" bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 class="pt-4 text-2xl font-semibold text-center">Create A Profile</h3>
                            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                            First Name
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="First_Name"
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
                                            name="Last_Name"
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
                                        name="Email"
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
                                            name="Password"
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
                                            name="Confirm_Password"
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
                                            name="Agency_Name"
                                            type="text"
                                            placeholder="agency name"
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Phone Number
                                        </label>
                                        <input

                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="Phone_Number"
                                            type="text"
                                            placeholder="+2126"
                                            onChange={handleChange}

                                        />
                                    </div>
                                </div>
                                <div class="mb-4 md:flex md:justify-between">
                                    {/* start of multiselect */}
                                    <div className="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Location
                                        </label>
                                        <div className=" text-sm	 text-gray-400">
                                            <select class="mr-2 px-10 py-2  text-left text-sm leading-tight  border rounded shadow appearance-none focus:outline-none focus:shadow-outline" onChange={handleChange} name='Location'>
                                                <option value="" disabled selected hidden>Choose a location</option>
                                                <option>casablanca</option>
                                                <option>tanger</option>
                                                <option>rabat</option>
                                                <option>beni mellal</option>
                                                <option>fes</option>
                                                <option>marrakech</option>
                                                <option>essouira</option>
                                                <option>agadir</option>
                                                <option>asillah</option>
                                                <option>dakhla</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* end of ms */}
                                    <div className="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Events organised                                    </label>
                                        <div className=" text-sm leading-tight text-gray-400">
                                            <select class="  px-12 py-2  text-sm leading-tight text--700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" onChange={handleChange} name='Events_organised' >
                                                <option value="" disabled selected hidden>Choose a Type</option>
                                                <option>Wedding</option>
                                                <option>Baby-Shower</option>
                                                <option>Birthday</option>
                                                <option>Conference</option>
                                                <option>Pic-Nic</option>
                                                <option>Engagement</option>
                                                <option>Proposal</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Capacity of guests
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            name="Capacity_of_guests"
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
                                            name="Open_to_all_cities"
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
                                            name="Can_personalize_service"
                                            type="text"
                                            placeholder="Yes/No"
                                            onChange={handleChange}

                                        />
                                    </div>
                                    <div className="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Working Hours
                                        </label>
                                        <div className=" text-sm leading-tight text-gray-400">
                                            <select class="mr-2 px-12 py-2  text-sm leading-tight text--700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" name='working_hours' onChange={handleChange}>
                                                <option value="" disabled selected hidden >Choose a Time</option>
                                                <option >morning shift</option>
                                                <option >mid-day shift</option>
                                                <option >night shift</option>
                                                <option > availble all day</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                        Short description
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        name="Short_description"
                                        type="text"
                                        placeholder="story, expertise and your services"
                                        onChange={handleChange}

                                    />
                                </div>
                                <div >
                                    <div class="image-upload">
                                        <label for="file-input">
                                            <img src={previewSource} style={{ height: '300px' }} />
                                        </label>
                                        <input name="image"
                                            type="file"
                                            onChange={handleFileInputChange}
                                            value={fileInputState}
                                            accept="image/*" />


                                    </div>


                                </div>

                                <div class="mb-6 text-center">
                               
                                   <button
                                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button" onClick={handleSubmitFile} 
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
                                    <a href="newLogin"
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"

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
             <img src='https://zeo.org/static/9c4aa2030987fb1ebd112f8cc3de9fcf/1633086035-agileapproach.svg'></img>
            </div>

        </div>
        <Footer/>
        </div>
    )
}

export default userProfile