import React from "react";
import FilterButtons from "./FilterButtons";
import ComputerImage from "./ComputerImage";
import SearchResults from "./SearchResults.js";
import SelectedImages from "./SelectedImages";


export default function YourBackgroundsComponent(props) {

    return (
      
      <section id="user-generated-set-window">
        <FilterButtons
          handleSubmit={props.handleSubmit}
          loading={props.loading}
          userSelectFilterTerm={props.userSelectFilterTerm}
        />

        <ComputerImage 
          displayComputerImage={props.displayComputerImage} />

        <SearchResults
          preSelectedImages={props.preSelectedImages}
          toggleFilterResultsPlaceholder={props.toggleFilterResultsPlaceholder}
          whichButton={props.whichButton}
          displaySearchResults={props.displaySearchResults}
          />

        <SelectedImages
          selectedImages={props.selectedImages}
          displaySelectedImages={props.displaySelectedImages}
          zipDownloadFolderSelectedImages={props.zipDownloadFolderSelectedImages}
          setDisplayDownloadButton={props.setDisplayDownloadButton}
          />

      </section>
    );
}
