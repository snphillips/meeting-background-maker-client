import React from "react";
import FilterButtons from "./FilterButtons";
import Results from "./Results.js";
import SelectedImages from "./SelectedImages.js";

export default function YourBackgroundsComponent(props) {

    return (
      
      <section id="user-generated-set-window">
        <FilterButtons
          handleFilterSubmit={props.handleFilterSubmit}
          loading={props.loading}
        />

        <Results
          preSelectedImages={props.preSelectedImages}
          toggleFilterResultsPlaceholder={props.toggleFilterResultsPlaceholder}
          whichButton={props.whichButton}
          displayFilteredResults={props.displayFilteredResults}
          />

        <SelectedImages
          selectedImages={props.selectedImages}
          displaySelectedImages={props.displaySelectedImages}
          zipDownloadFolderSelectedImages={props.zipDownloadFolderSelectedImages}
          />

      </section>
    );
}
