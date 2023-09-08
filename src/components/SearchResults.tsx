import React from "react";
import Masonry from "react-masonry-css";

/*
This component takes an array called preSelectedImages 
(that was populated when the user selected a search term),
maps over that array and displays each image and a button
under each image. 

The button (whichButton) could say "add to collection"
or, "in collection". 
*/

type PropsType = {
  preSelectedImages: any;
  selectedImagesCollection: any;
  setSelectedImagesCollection: any;
  displaySearchResults: any;
};


export default function SearchResults({
  preSelectedImages,
  selectedImagesCollection,
  setSelectedImagesCollection,
  displaySearchResults,
}: PropsType ) {
  
  // let preSelectedImages = preSelectedImages


  // If the item is in user's collection, display "in collection" label
  // If not, display "add to collection" button
  function whichButton(item: any) {
 
    // TODO: type is button object or string | null
    let buttonOrDivResult: any = null;

    /* 
    The some() method tests whether at least one element
    in the array passes the test implemented by the provided
    function. It returns true if, in the array, it finds an
    element for which the provided function returns true; 
    otherwise it returns false. It doesn't modify the array.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    */

    function comparisonTest(el: any) {
      return el.id === item.id
    }


    if (selectedImagesCollection.some(comparisonTest)) {
      buttonOrDivResult = (
        <div
          // TOOD: are type and value needed? I think not
          // type=""
          // value={item.id}
          className="results-div-in-collection"
        >
          in collection
        </div>
      );
    } else {
      buttonOrDivResult = (
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
    console.log( 'type buttonOrDivResult:', typeof buttonOrDivResult)
    console.log( 'buttonOrDivResult:', buttonOrDivResult)
    return buttonOrDivResult;
  }

  function addToCollection(item: any){
    if (selectedImagesCollection.length >= 20) {
      console.log("Collection is full. Return.", selectedImagesCollection.length)
      alert("Collection full. Remove an image before adding another.")
      return;
    }
    setSelectedImagesCollection( (array: any[]) => array.concat(item) );
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
      { displaySearchResults &&
      <div>
        
        <h3>Search Results</h3>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid curated-sets-list pre-selected-images-gallery results image-grid"
          columnClassName="my-masonry-grid_column"
          >

          {preSelectedImages.map((item: any, index: number) => {         
            
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
