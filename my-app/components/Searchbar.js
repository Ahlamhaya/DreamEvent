<div className='flex mt-10'>
{/* right search bar */}
<div className=' md:shadow-sm flex items-center border-2 rounded-md py2  h-14 '>
    <SearchIcon className="hidden md:inline-flex h-8 bg-purple-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />

    <Search />
    {/* <input list="brow" placeholder='Start your search here' className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'></input>
    <datalist id="brow" >
        <option className='bg-white' value="Wedding"></option>
            <option value="Birthday"></option>
                <option value="Graduation Ceremony"></option>
                    <option value="Baby Shower"></option>
                        <option value="Engagement"></option>
                        <option value="Pic-nic"></option>
                        <option value="Conference"></option>
                        <option value="Family ghatering"></option>
                        <option value="Bachlor party"></option>
                        <option value="Business launching"></option>
                        </datalist> */}

</div>

{/* middle search bar */}
<div className=' md:shadow-sm flex items-center border-2 rounded-md py2 m h-14  '>


    <input className='pl-5 bg-transarent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
        type="text" placeholder='Where' />
</div>
{/* search button  */}
<div className='flex items-center '>
    <button class="bg-[#23DCC0] hover:bg-[#5FDAC7] text-white font-bold py-4 px-6 rounded-md ">
        Search
    </button>
</div>
</div>
