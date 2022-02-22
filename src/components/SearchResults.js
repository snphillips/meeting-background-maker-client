import React from "react";
import Masonry from "react-masonry-css";

/*
This component takes an array called preSelectedImages 
(that was populated when the user selected a search term),
maps over that array and displays each image with info.

TODO: if the array only contains jpegs from the server,
you won't have any of the metadata that makes this app interesting.
It seems you want to keep all this great metadata,
but also bring over the path to the locally stored image.
*/

export default function SearchResults(props) {
  
  
  let preSelectedImages = props.preSelectedImages;
  
  // For use with Masonry package
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };
  
  return (
    
    
      <section className="component" id="results-component">

      { props.displaySearchResults &&
      <div>
        
        <h3>Search Results</h3>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid curated-sets-list pre-selected-images-gallery results image-grid"
          columnClassName="my-masonry-grid_column"
          >
          {preSelectedImages.map((item) => {
            // console.log("hi from results.js. Item is:", item)
            
            return (
              <div key={item.id} className="image-card card">
                <a href={item.url}>
                  <img
                    className="result-img"
                    src={item.images[0].b.url}
                    alt={item.title}
                  />
                </a>
                <p className="item-title">{item.title}</p>
                {/* <p className="item-title">{item.id}</p> */}

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
