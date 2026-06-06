import { Dispatch, SetStateAction } from 'react';
import Masonry from 'react-masonry-css';
import { MuseumItemType } from '../types';

type Props = {
  displaySearchResults: boolean;
  preSelectedImages: MuseumItemType[];
  selectedImagesCollection: MuseumItemType[];
  serverError: boolean;
  setSelectedImagesCollection: Dispatch<SetStateAction<MuseumItemType[]>>;
  openModal: (arg: number) => void;
};

const imgBucketURL = 'https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds/';
const breakpointColumnsObj = {
  default: 3,
  960: 2,
  650: 1,
};

export default function SearchResults({
  displaySearchResults,
  preSelectedImages,
  selectedImagesCollection,
  serverError,
  setSelectedImagesCollection,
  openModal,
}: Props) {
  function addToCollection(item: MuseumItemType) {
    if (selectedImagesCollection.length >= 20) {
      alert('Collection full. Remove an image before adding another.');
      return;
    }
    setSelectedImagesCollection((prev) => [...prev, item]);
  }

  return (
    <section className="component" id="results-component">
      {serverError && (
        <div>
          <p>There was an error getting images.</p>
          <p>In the meantime, view the curated sets.</p>
        </div>
      )}
      {displaySearchResults && !serverError && (
        <div>
          <h3>Search Results</h3>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid curated-sets-list pre-selected-images-gallery results image-grid"
            columnClassName="my-masonry-grid_column"
          >
            {preSelectedImages.map((item: MuseumItemType, index: number) => (
              <div key={item.id} className="image-card card">
                <img
                  className="result-img"
                  src={`${imgBucketURL}${item.id}.jpg`}
                  alt={item.title}
                  onClick={() => openModal(index)}
                />
                {selectedImagesCollection.some((el) => el.id === item.id) ? (
                  <div className="results-button-in-collection">in collection</div>
                ) : (
                  <button
                    type="button"
                    className="results-button-add-to-collection"
                    onClick={() => addToCollection(item)}
                  >
                    add to collection
                  </button>
                )}
              </div>
            ))}
          </Masonry>
        </div>
      )}
    </section>
  );
}
