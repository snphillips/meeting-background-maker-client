import React from "react";
import FilterButtons from "./FilterButtons";
import ComputerImage from "./ComputerImage";
import SearchResults from "./SearchResults.js";
import SelectedCollection from "./SelectedCollection";

export default function YourBackgroundsComponent(props) {

    return (
      
      <section id="user-generated-set-window">
        <FilterButtons
          loading={props.loading}
          userSelectFilterTerm={props.userSelectFilterTerm}
          activeButton={props.activeButton}
          handleDropdownSubmit={props.handleDropdownSubmit}
          onChange={props.handleDropdownChange}
        />

        <ComputerImage 
          displayComputerImage={props.displayComputerImage} />

        <SearchResults
          value={props.value}
          preSelectedImages={props.preSelectedImages}
          selectedImagesCollection={props.selectedImagesCollection}
          toggleFilterResultsPlaceholder={props.toggleFilterResultsPlaceholder}
          whichButton={props.whichButton}
          displaySearchResults={props.displaySearchResults}
          openModal={props.openModal}
          addToCollection={props.addToCollection}
          setSelectedImagesCollection={props.setSelectedImagesCollection}
        />

        <SelectedCollection
          removeFromCollection={props.removeFromCollection}
          selectedImagesCollection={props.selectedImagesCollection}
          displaySelectedImages={props.displaySelectedImages}
          zipDownloadFolderSelectedImages={props.zipDownloadFolderSelectedImages}
          setDisplayDownloadButton={props.setDisplayDownloadButton}
        />

      </section>
    );
}
