import React from 'react';
import FilterButtons from './FilterButtons';
import ComputerImage from './ComputerImage';
import SearchResults from './SearchResults';
import SelectedCollection from './SelectedCollection';
import { MuseumItemType, FilterTermType }  from '../types';

type Props = {
  activeButton: FilterTermType | 'button-id';
  activeTab: 0 | 1;
  displayComputerImage: boolean;
  displaySearchResults: boolean;
  displaySelectedImages: boolean;
  handleDropdownSubmit: (arg: any) => void;
  loading: boolean;
  preSelectedImages: MuseumItemType[] | [];
  removeItemFromCollection: (param: MuseumItemType) => void;
  selectedImagesCollection: MuseumItemType[];
  setSelectedImagesCollection: (param: any) => void;
  userSelectsFilterTerm: (param: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
