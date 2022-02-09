import React, { useState } from "react";
import _Lodash from "lodash";

/*
This section contains the curated set images and the "view set" button.
(The "download image set" button )
The first image from every set IS NOT displayed, as it it displayed
as the cover in CuratedSetsComponent.js. The first image is removed by
using the _Lodash library's drop method

This componenet has two states: imagesRevealed & viewButtonMessage.
An image set is either expanded (imagesRevealed: true) or collapsed (imagesRevealed: false)
The button message (viewButtonMessage) depends on whether the images are
revealed or not.
*/

export default function CuratedSetsImageGallery(props){

  
  const [imagesRevealed, setImagesRevealed] = useState(false);
  const [viewButtonMessage, setViewButtonMessage] = useState("view set"); 
    



  function toggleCuratedSetImages(set, index) {
    console.log("toggle curated set images for: ", set, index);
    imagesRevealed
      ? setImagesRevealed(false)
      : setImagesRevealed(true);
    console.log("imagesRevealed is ", imagesRevealed);
    imagesRevealed ? setViewButtonMessage("view set") : setViewButtonMessage("hide set");
  }


    let index = props.index;
    let thisCuratedSet = props.curatedSetsArray[index];
    let allTheSetImages = thisCuratedSet.images;
    let allTheSetImagesMinusCover = _Lodash.drop(allTheSetImages, 1);

    return (
      <div>
        <section
          className="curated-images-gallery"
          id={"curated-set-gallery-" + index}
          style={{ maxHeight: imagesRevealed ? "4000px" : 0 }}
        >
          {allTheSetImagesMinusCover.map((item, index) => {

            return (
              <div
                key={index}
                id={"-curated-image-" + index}
                className="curated-image"
              >
                <a href={item.url}>
                  <img
                    className="curated-list-img"
                    src={item.localImageURL}
                    alt={item.title}
                  />
                </a>
              </div>
            );
          })}
        </section>
        <button
          key={index + "-view-allbutton"}
          id={thisCuratedSet + "-view-allbutton"}
          className="curated-set-view-all-button"
          type=""
          value={index}
          onMouseOver={(event, index) => {
            console.log("view images in set:", thisCuratedSet.setName)
          }}
          onClick={(event, index) => {
            toggleCuratedSetImages(thisCuratedSet, index);
          }}
        >
          {viewButtonMessage}
        </button>
      </div>
    );
}
