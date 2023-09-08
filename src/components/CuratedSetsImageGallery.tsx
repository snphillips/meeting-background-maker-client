import React from "react";
// import _Lodash from "lodash";

/*
This section contains the curated set images and the "view set" button.
(The "download image set" button is in CuratedSetsComponent)

The first image from every set IS NOT displayed, as it it displayed
as the cover in CuratedSetsComponent.js. The first image is removed by
using the _Lodash library's drop method.

This component has two states: imagesRevealed & viewButtonMessage.

An image set is either expanded (imagesRevealed: true) or collapsed (imagesRevealed: false)
The button message (viewButtonMessage) depends on whether the images are
revealed or not.
*/

type PropsType = {
  index: number,
  curatedSetsArray: any[],
  // toggleCuratedSetImages: any,
};

export default function CuratedSetsImageGallery({
  index,
  curatedSetsArray,
  // toggleCuratedSetImages
}: PropsType): React.ReactNode {
  
    const thisCuratedSet = curatedSetsArray[index];
    const allTheSetImages = thisCuratedSet.images; 

    return (
      <div>
        <section
          className="curated-images-gallery"
          id={"curated-set-gallery-" + index}
          style={{ maxHeight: "4000px"}}
        >
          {allTheSetImages.map((item: any, index: any) => {

            return (
              <div
                key={index}
                id={"-curated-image-" + index}
                className="curated-image"
              >
                  <img
                    className="curated-list-img"
                    src={item.imageURL}
                    alt={item.title}
                    onClick={(index) => {
                      console.log('toggleCuratedSetImages fired I guess?', index)
                      // toggleCuratedSetImages(thisCuratedSet, index);
                    }}
                  />
              </div>
            );
          })}
        </section>
      </div>
    );
}
