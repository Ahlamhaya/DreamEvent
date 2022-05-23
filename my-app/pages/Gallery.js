import GridGallery from '../components/GridGallery'
import React from 'react'
import Navbar from '../components/Navbar'


function Gallery() {
    const images = [
        "celeb1.jpg",
        "bride.jpg",
        "frdz.jpg",
        "kidbd.jpg",
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
<GridGallery images={images    } />


    </div>
  )
}

export default Gallery