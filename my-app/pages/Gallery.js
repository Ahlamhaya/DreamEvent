import GridGallery from '../components/GridGallery'
import React from 'react'
import Navbar from '../components/Navbar'


function Gallery() {
    const images = [
        "celeb1.jpg",
        "bride.jpg",
        "frdz.jpg",
        "bdzz.jpg",
        "tablee.jpg",
        "bridesmaid.jpg",
        "wedding.jpg",
        "musical.jpg",
        "aisle.jpg",
        "beach.jpg",
        "granny.jpg",
        "picnic.jpg",
        "fam.jpg",
        "table.jpg",
        "engagement.jpg",
        "bdcake.jpg",
        "asianwedding.jpg",
        "famgathering.jpg",
      ];
  return (
    <div>

<Navbar/>

      <h2 className='text-lg  mt-10 lg:text-center mx-6'> A Sneak Peak On Recent Events Made With DreamEvent ...</h2>
<GridGallery images={images    } />


    </div>
  )
}

export default Gallery