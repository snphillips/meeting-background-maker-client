import React from 'react';
import FilterButtons from './FilterButtons.tsx';
import ComputerImage from './ComputerImage.tsx';
import SearchResults from './SearchResults.tsx';
import SelectedCollection from './SelectedCollection.tsx';

type Props = {
  activeButton: any,
  activeTab: any,
  displayComputerImage: any,
  displaySearchResults: any,
  displaySelectedImages: any,
  handleDropdownChange: any,
  handleDropdownSubmit: any,
  loading: any,
  openModal: any,
  preSelectedImages: any,
  removeFromCollection: any,
  selectedImagesCollection: any,
  setDisplayDownloadButton: any,
  setSelectedImagesCollection: any,
  toggleFilterResultsPlaceholder: any,
  userSelectFilterTerm: any,
  value: any,
  zipDownloadFolderSelectedImages: any,
};

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
}: Props) {
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
