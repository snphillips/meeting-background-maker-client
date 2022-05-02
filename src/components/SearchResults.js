import React from "react";
// import { useState } from 'react';
// import { isCompositeComponent } from "react-dom/test-utils";
import Masonry from "react-masonry-css";

/*
This component takes an array called preSelectedImages 
(that was populated when the user selected a search term),
maps over that array and displays each image and a button
under each image. 

The button (props.whichButton) could say "add to collection"
or, "in collection". 
*/

export default function SearchResults(props) {
  
  let preSelectedImages = props.preSelectedImages
  
  // For use with React Masonry CSS package
  const breakpointColumnsObj = {
    default: 3,
    960: 2,
    650: 1,
  };


  
  return (
    <section className="component" id="results-component">

      {/* Nifty way of knowing when to display a component */}
      { props.displaySearchResults &&
      <div>
        
        <h3>Search Results</h3>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid curated-sets-list pre-selected-images-gallery results image-grid"
          columnClassName="my-masonry-grid_column"
          >

          {preSelectedImages.map((item, index) => {         
            
            return (
              <div 
                key={index}
                className="image-card card"
              >
                  <img
                    key={item.id}
                    className="result-img"
                    src={`https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds/` + item.id + ".jpg"}
                    alt={item.title}
                    onClick={ () => {
                      // nothing going on now when user clicks
                      // perhaps in the future? Like, a modal opens?     
                    }}
                  />
                {props.whichButton(item)}
              </div>
            );
          })}
        </Masonry>
        </div>
        }
      </section>
    );
}
