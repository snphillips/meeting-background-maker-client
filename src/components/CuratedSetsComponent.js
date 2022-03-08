import React from "react";
import CuratedSetsImageGallery from "./CuratedSetsImageGallery";
import Masonry from "react-masonry-css";


export default function CuratedSetComponent(props) {

    // let displayUserGeneratedSetComponentWindow = props.displayUserGeneratedSetComponent
    // let displayCuratedSetComponentWindow = props.displayCuratedSetComponent
    let curatedSetsArray = props.curatedSets;
    // console.log("curatedSetsArray in CuratedSetsComponent:", curatedSetsArray)

    // For use with Masonry package
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1,
    }

    return (
      <section id="curated-set-window">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid curated-sets-list"
          columnClassName="my-masonry-grid_column"
        >
          {curatedSetsArray.map((item, index) => {
            // console.log("curatedSetsArray[0].images[0].imageURL:", curatedSetsArray[0].images[0].imageURL)

            return (
              <div
                key={index + "-card"}
                className="curated-set-card card"
                value={item.setName}
              >
                <div
                  key={index + "-label"}
                  className="curated-set-label"
                  value={item.setName}
                  onClick={(event) => {
                    console.log("button value is:", event.target.value);
                    // props.handleFilterSubmit(event)
                  }}
                >
                  {item.setName}
                </div>

                <img
                  src={item.images[0].localImageURL}
                  id={"curated-set-cover-image-" + index}
                  className="curated-set-cover-image"
                />

                <CuratedSetsImageGallery
                  curatedSetsArray={curatedSetsArray}
                  index={index}
                />

                <a href={
                    // machineName is something I created.
                    // It has no spaces
                    "/meeting-backgrounds/curatedSets/" +
                    item.machineName + ".zip"
                  }>
                  <button
                    key={item.setName + "downlad-button"}
                    className="curated-set-download-button"
                    type="download"
                    value={item.setName}
                    onClick={() => {
                      console.log("HI! download images:", item.setName);
                      // props.zipDownloadFolderCuratedSet(item.setName, index)
                    }}
                    onMouseOver={() => {
                      console.log("download selected images", item.setName);
                    }}
                  >
                    download image set
                  </button>
                </a>
              </div>
            );
          })}
        </Masonry>
      </section>
    );
}
