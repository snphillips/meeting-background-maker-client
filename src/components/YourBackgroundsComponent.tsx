import React from 'react';
import FilterButtons from './FilterButtons.tsx';
import ComputerImage from './ComputerImage.tsx';
import SearchResults from './SearchResults.tsx';
import SelectedCollection from './SelectedCollection.tsx';
import { MuseumItemType, FilterTermType }  from '../types.ts';

type Props = {
  activeButton: FilterTermType | 'button-id';
  activeTab: 0 | 1 | 2;
  displayComputerImage: boolean;
  displaySearchResults: boolean;
  displaySelectedImages: boolean;
  handleDropdownSubmit: () => void;
  loading: boolean;
  preSelectedImages: MuseumItemType[] | [];
  removeItemFromCollection: (param: MuseumItemType) => void;
  selectedImagesCollection: MuseumItemType[];
  setDisplayDownloadButton: () => void;
  setSelectedImagesCollection: (param: any) => void;
  userSelectsFilterTerm: () => void;
  value: FilterTermType;
  zipDownloadFolderSelectedImages: () => void;
};

export default function YourBackgroundsComponent({
  activeButton,
  activeTab,
  displayComputerImage,
  displaySearchResults,
  displaySelectedImages,
  handleDropdownSubmit,
  loading,
  preSelectedImages,
  removeItemFromCollection,
  selectedImagesCollection,
  setDisplayDownloadButton,
  setSelectedImagesCollection,
  userSelectsFilterTerm,
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
        // loading={loading}
        userSelectsFilterTerm={userSelectsFilterTerm}
      />

      <ComputerImage displayComputerImage={displayComputerImage} />

      <SearchResults
        displaySearchResults={displaySearchResults}
        preSelectedImages={preSelectedImages}
        selectedImagesCollection={selectedImagesCollection}
        setSelectedImagesCollection={setSelectedImagesCollection}
      />

      <SelectedCollection
        displaySelectedImages={displaySelectedImages}
        removeItemFromCollection={removeItemFromCollection}
        selectedImagesCollection={selectedImagesCollection}
        zipDownloadFolderSelectedImages={zipDownloadFolderSelectedImages}
      />
    </section>
  );
}
