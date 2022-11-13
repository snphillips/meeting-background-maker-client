import React from 'react';
import FilterButtons from './FilterButtons.js';
import ComputerImage from './ComputerImage.js';
import SearchResults from './SearchResults.js';
import SelectedCollection from './SelectedCollection.js';

export default function YourBackgroundsComponent({
  activeButton,
  activeTab,
  displayComputerImage,
  displaySearchResults,
  displaySelectedImages,
  handleDropdownChange,
  handleDropdownSubmit,
  loading,
  openModal,
  preSelectedImages,
  removeFromCollection,
  selectedImagesCollection,
  setDisplayDownloadButton,
  setSelectedImagesCollection,
  toggleFilterResultsPlaceholder,
  userSelectFilterTerm,
  value,
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
        activeButton={activeButton}
        handleDropdownSubmit={handleDropdownSubmit}
        loading={loading}
        onChange={handleDropdownChange}
        userSelectFilterTerm={userSelectFilterTerm}
      />

      <ComputerImage displayComputerImage={displayComputerImage} />

      <SearchResults
        displaySearchResults={displaySearchResults}
        openModal={openModal}
        preSelectedImages={preSelectedImages}
        selectedImagesCollection={selectedImagesCollection}
        setSelectedImagesCollection={setSelectedImagesCollection}
        toggleFilterResultsPlaceholder={toggleFilterResultsPlaceholder}
        value={value}
      />

      <SelectedCollection
        displaySelectedImages={displaySelectedImages}
        removeFromCollection={removeFromCollection}
        selectedImagesCollection={selectedImagesCollection}
        setDisplayDownloadButton={setDisplayDownloadButton}
        zipDownloadFolderSelectedImages={zipDownloadFolderSelectedImages}
      />
    </section>
  );
}
