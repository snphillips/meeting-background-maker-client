import React from "react";
import Filters from "./Filters";
import Results from "./Results.js";
import SelectedImages from "./SelectedImages.js";

export default function UserGeneratedSetComponent(props) {

  // componentDidMount() {
    // props.toggleDisplayBlockOrNone(
    //   props.displayResultsComponent,
    //   "#results-component"
    // );
    // props.toggleDisplayBlockOrNone(
    //   props.displaySelectedImages,
    //   "#selected-images-component"
    // );
  // }

    return (
      <section id="user-generated-set-window">
        <Filters
          handleFilterSubmit={props.handleFilterSubmit}
          loading={props.loading}
        />

        <Results
          // parentstate={props}
          preSelectedImages={props.preSelectedImages}
          toggleFilterResultsPlacehodler={props.toggleFilterResultsPlacehodler}
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
