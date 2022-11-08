import React from "react";

/*
This section contains the curated set images and
the "view set" button. The "download image set" 
button is in CuratedSetsComponent.
*/

export default function CuratedSetsImageGallery({ curatedSetsArray, index }) {
  let thisCuratedSet = curatedSetsArray[index];
  let allTheSetImages = thisCuratedSet.images;

  return (
    <div>
      <section
        className="curated-images-gallery"
        id={"curated-set-gallery-" + index}
        style={{ maxHeight: "4000px" }}
      >
        {allTheSetImages.map((item, index) => {
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
                  console.log(index, "clicked");
                }}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
