import React from 'react';
import Carousel from './Carousel';
import { galleryData } from '../components/GallariesData'; // Corrected path and import name

function ArtCards() {
  return (
    <div className="d-flex flex-wrap">
      {galleryData.map((gallery, index) => (
        <Carousel key={index} title={gallery.title} images={gallery.images} />
      ))}
    </div>
  );
}

export default ArtCards;
