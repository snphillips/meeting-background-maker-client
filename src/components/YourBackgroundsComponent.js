import React from "react";
import FilterButtons from "./FilterButtons";
import ComputerImage from "./ComputerImage";
import SearchResults from "./SearchResults.js";
import SelectedImages from "./SelectedImages";


export default function YourBackgroundsComponent(props) {

    return (
      
      <section id="user-generated-set-window">
        <FilterButtons
          loading={props.loading}
          userSelectFilterTerm={props.userSelectFilterTerm}
          allTags={props.allTags}
          handleDropdownSubmit={props.handleDropdownSubmit}
          onChange={props.handleDropdownChange}
        />

        <ComputerImage 
          displayComputerImage={props.displayComputerImage} />

        <SearchResults
          value={props.value}
          preSelectedImages={props.preSelectedImages}
          toggleFilterResultsPlaceholder={props.toggleFilterResultsPlaceholder}
          whichButton={props.whichButton}
          displaySearchResults={props.displaySearchResults}
          />

        <SelectedImages
          value={props.value}
          selectedImagesCollection={props.selectedImagesCollection}
          displaySelectedImages={props.displaySelectedImages}
          zipDownloadFolderSelectedImages={props.zipDownloadFolderSelectedImages}
          setDisplayDownloadButton={props.setDisplayDownloadButton}
          />

      </section>
    );
}
