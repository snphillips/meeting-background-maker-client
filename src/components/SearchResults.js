import React from "react";
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


  // If the item is in user's collection, display "in collection" label
  // If not, display "add to collection" button
  function whichButton(item) {
 
    let buttonResult = "";
    // console.log('selectedImagesCollection:', props.selectedImagesCollection, 'item:',  item)

    /* 
    The some() method tests whether at least one element
    in the array passes the test implemented by the provided
    function. It returns true if, in the array, it finds an
    element for which the provided function returns true; 
    otherwise it returns false. It doesn't modify the array.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    */
    if (props.selectedImagesCollection.some(el => el.id === item.id)) {
      // console.log("💋 item included", item.id)
      buttonResult = (
        <button
          type="button"
          value={item.id}
          className="results-button-in-collection"
        >
          in collection
        </button>
      );
    } else {
      // console.log("👎 item NOT included", item.id)
      buttonResult = (
        <button
          type="button"
          value={item.id}
          className="results-button-add-to-collection"
          onClick={() => {
            addToCollection(item);
          }}
        >
          add to collection
        </button>
      );
    }
    return buttonResult;
  }

  function addToCollection(item){
    if (props.selectedImagesCollection.length >= 20) {
      console.log("Collection is full. Return.", props.selectedImagesCollection.length)
      alert("Collection full. Remove an image before adding another.")
      return;
    }
    props.setSelectedImagesCollection( array => array.concat(item) );
  }
  
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
                {whichButton(item)}
              </div>
            );
          })}
        </Masonry>
        </div>
        }
      </section>
    );
}
