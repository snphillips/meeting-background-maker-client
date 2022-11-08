import React from 'react';
import FilterButtons from './FilterButtons';
import ComputerImage from './ComputerImage';
import SearchResults from './SearchResults.js';
import SelectedCollection from './SelectedCollection';

export default function YourBackgroundsComponent({
  activeButton,
  activeTab,
  addToCollection,
  displayComputerImage,
  displaySearchResults,
  displaySelectedImages,
  handleDropdownChange,
  handleDropdownSubmit,
  loading,
  preSelectedImages,
  removeFromCollection,
  selectedImagesCollection,
  setSelectedImagesCollection,
  setDisplayDownloadButton,
  userSelectFilterTerm,
  value,
  whichButton,
  openModal,
  toggleFilterResultsPlaceholder,
  zipDownloadFolderSelectedImages,
}) {
  return (
    <section
      id='user-generated-set-window'
      style={{
        display: activeTab === 0 ? 'block' : 'none',
      }}
    >
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
