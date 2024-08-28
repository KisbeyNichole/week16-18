import React from 'react';
import ImageCarousel from './Carousel'; // Use the correct name
import { galleryData } from '../components/GallariesData';

function ArtCards() {
  return (
    <div className="d-flex flex-wrap">
      {galleryData.map((gallery, index) => (
        <ImageCarousel
          key={index}
          title={gallery.title}
          description={gallery.description} // Make sure description is passed if needed
          images={gallery.images}
        />
      ))}
    </div>
  );
}

export default ArtCards;
