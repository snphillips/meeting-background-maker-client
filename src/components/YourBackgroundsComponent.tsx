import React from 'react';
import FilterButtons from './FilterButtons';
import ComputerImage from './ComputerImage';
import SearchResults from './SearchResults.js';
import SelectedCollection from './SelectedCollection';

type PropsType = {
  loading: any,
  userSelectFilterTerm: any,
  activeButton: any,
  handleDropdownSubmit: any,
  handleDropdownChange: any,
  displayComputerImage: any,
  preSelectedImages: any,
  selectedImagesCollection: any,
  toggleFilterResultsPlaceholder: any,
  whichButton: any,
  displaySearchResults: any,
  openModal: any,
  addToCollection: any,
  setSelectedImagesCollection: any,
  removeFromCollection: any,
  displaySelectedImages: any,
  zipDownloadFolderSelectedImages: any,
  setDisplayDownloadButton: any,
};

export default function YourBackgroundsComponent({
  loading,
  userSelectFilterTerm,
  activeButton,
  handleDropdownSubmit,
  handleDropdownChange,
  displayComputerImage,
  preSelectedImages,
  selectedImagesCollection,
  toggleFilterResultsPlaceholder,
  whichButton,
  displaySearchResults,
  openModal,
  addToCollection,
  setSelectedImagesCollection,
  removeFromCollection,
  displaySelectedImages,
  zipDownloadFolderSelectedImages,
  setDisplayDownloadButton,
}: PropsType) {
  return (
    <section id="user-generated-set-window">
      <FilterButtons
        loading={loading}
        userSelectFilterTerm={userSelectFilterTerm}
        activeButton={activeButton}
        handleDropdownSubmit={handleDropdownSubmit}
        onChange={handleDropdownChange}
      />

      <ComputerImage displayComputerImage={displayComputerImage} />

      <SearchResults
        value={value}
        preSelectedImages={preSelectedImages}
        selectedImagesCollection={selectedImagesCollection}
        toggleFilterResultsPlaceholder={toggleFilterResultsPlaceholder}
        whichButton={whichButton}
        displaySearchResults={displaySearchResults}
        openModal={openModal}
        addToCollection={addToCollection}
        setSelectedImagesCollection={setSelectedImagesCollection}
      />

      <SelectedCollection
        removeFromCollection={removeFromCollection}
        selectedImagesCollection={selectedImagesCollection}
        displaySelectedImages={displaySelectedImages}
        zipDownloadFolderSelectedImages={zipDownloadFolderSelectedImages}
        setDisplayDownloadButton={setDisplayDownloadButton}
      />
    </section>
  );
}
