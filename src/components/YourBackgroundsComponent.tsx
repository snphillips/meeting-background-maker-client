import { Dispatch, SetStateAction, MouseEvent, ChangeEvent } from 'react';
import FilterButtons from './FilterButtons';
import ComputerImage from './ComputerImage';
import SearchResults from './SearchResults';
import SelectedCollection from './SelectedCollection';
import { MuseumItemType, FilterTermType } from '../types';

type Props = {
  activeButton: FilterTermType | 'button-id';
  activeTab: 0 | 1;
  displayComputerImage: boolean;
  displaySearchResults: boolean;
  displaySelectedImages: boolean;
  loading: boolean;
  preSelectedImages: MuseumItemType[];
  removeItemFromCollection: (param: MuseumItemType) => void;
  selectedImagesCollection: MuseumItemType[];
  serverError: boolean;
  setSelectedImagesCollection: Dispatch<SetStateAction<MuseumItemType[]>>;
  userSelectsFilterTerm: (event: MouseEvent<HTMLButtonElement, MouseEvent> | ChangeEvent<HTMLSelectElement>) => void;
  value: FilterTermType | null;
  zipDownloadFolderSelectedImages: () => void;
  openModal: (arg: number) => void;
};

export default function YourBackgroundsComponent({
  activeButton,
  activeTab,
  displayComputerImage,
  displaySearchResults,
  displaySelectedImages,
  loading,
  preSelectedImages,
  removeItemFromCollection,
  selectedImagesCollection,
  serverError,
  setSelectedImagesCollection,
  userSelectsFilterTerm,
  zipDownloadFolderSelectedImages,
  openModal,
}: Props) {
  return (
    <section
      id="user-generated-set-window"
      style={{
        display: activeTab === 0 ? 'block' : 'none',
      }}
    >
      <FilterButtons activeButton={activeButton} loading={loading} userSelectsFilterTerm={userSelectsFilterTerm} />

      <ComputerImage displayComputerImage={displayComputerImage} />

      <SearchResults
        displaySearchResults={displaySearchResults}
        preSelectedImages={preSelectedImages}
        selectedImagesCollection={selectedImagesCollection}
        serverError={serverError}
        setSelectedImagesCollection={setSelectedImagesCollection}
        openModal={openModal}
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
