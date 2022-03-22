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
          {props.preSelectedImages.map((item, index) => {
            // console.log("hi from results.js. Item is:", item)
            
            return (
              <div key={item.id} className="image-card card">
                <a href={item.url}>
                  <img
                    key={index}
                    className="result-img"
                    // src={item.images[0].b.url}
                    // src={`../meeting-backgrounds/` + props.value + "/" + item.id + ".jpg"}
                    // src={`http://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds/` + props.value + "/" + item.id + ".jpg"}
                    src={`meeting-backgrounds/` + props.value + "/" + item.id + ".jpg"}
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
