import React, { useEffect } from "react";
import FilterButtons from "./FilterButtons";
import Results from "./Results.js";
import SelectedImages from "./SelectedImages.js";

export default function UserGeneratedSetComponent(props) {

  useEffect(() => {

    props.toggleDisplayBlockOrNone(
      props.displayResultsComponent,
      "#results-component"
    );
    props.toggleDisplayBlockOrNone(
      props.displaySelectedImages,
      "#selected-images-component"
    );
    
  }, []);



  

    return (
      <section id="user-generated-set-window">
        <FilterButtons
          handleFilterSubmit={props.handleFilterSubmit}
          loading={props.loading}
        />

        <Results
          // parentstate={props}
          preSelectedImages={props.preSelectedImages}
          toggleFilterResultsPlaceholder={props.toggleFilterResultsPlaceholder}
          whichButton={props.whichButton}
        />

        <SelectedImages
          selectedImages={props.selectedImages}
          toggleSelectedImagesComponent={props.toggleSelectedImagesComponent}
          zipDownloadFolderSelectedImages={props.zipDownloadFolderSelectedImages}
          toggleDisplayBlockOrNone={props.toggleDisplayBlockOrNone}
        />
      </section>
    );
}
