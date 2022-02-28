import React from "react";
import Masonry from "react-masonry-css";

export default function SelectedImages(props) {
  
    // For use with Masonry package
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    };

    return (
      
      <div className="component" id="selected-images-component">

      { props.displaySelectedImages &&
        <div>
        <section>
          <h3>Your selected images</h3>

          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid curated-sets-list selected-images-gallery image-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.selectedImagesCollection.map((item, index) => {
              // console.log("hihih", props.selectedImagesCollection[0])
              return (
                <div className="image-card card" key={index} >
                  <img
                    key={index}
                    className="selected-img"
                    src={item.images[0].b.url}
                    alt={item.title}
                  />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </Masonry>
        </section>

        <button
          className="download-button"
          value=""
          onClick={(event) => {
            console.log("download selected images");
            props.zipDownloadFolderSelectedImages();
          }}
        >
          Download Set of Selected Images
        </button>
        </div>
      }
        </div>
    );
}
