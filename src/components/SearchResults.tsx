import React from 'react';
import Masonry from 'react-masonry-css';
import { MuseumItemType } from '../types';

/*
This component takes an array called preSelectedImages 
(that was populated when the user selected a search term),
maps over that array and displays each image and a button
under each image. 

The button/div (buttonOrDiv) could be a button that says 'add to collection'
or a div that says, 'in collection'. 
*/

type Props = {
  displaySearchResults: boolean;
  preSelectedImages: MuseumItemType[] | [];
  selectedImagesCollection: MuseumItemType[] | [];
  serverError: boolean;
  setSelectedImagesCollection: React.Dispatch<React.SetStateAction<MuseumItemType[] | []>>;
};

// export default function SearchResults(props) {
export default function SearchResults({
  displaySearchResults,
  preSelectedImages,
  selectedImagesCollection,
  serverError,
  setSelectedImagesCollection,
}: Props) {
  // If the item is in user's collection, display 'in collection' label
  // If not, display 'add to collection' button
  function whichButton(item: MuseumItemType) {
    let buttonOrDiv: JSX.Element | null = null;

    /* 
    The some() method tests whether at least one element
    in the array passes the test implemented by the provided
    function. It returns true if, in the array, it finds an
    element for which the provided function returns true; 
    otherwise it returns false. It doesn't modify the array.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    */
    if (selectedImagesCollection.some((el: MuseumItemType) => el.id === item.id)) {
      buttonOrDiv = <div className="results-button-in-collection">in collection</div>;
    } else {
      buttonOrDiv = (
        <button
          type="button"
          value={item.id}
          className="results-button-add-to-collection"
          onClick={() => {
            addToCollection(item);
          }}
        >
          add to collection
        </button>
      );
    }
    return buttonOrDiv;
  }

  function addToCollection(item: MuseumItemType) {
    if (selectedImagesCollection.length >= 20) {
      alert('Collection full. Remove an image before adding another.');
      return;
    }
    setSelectedImagesCollection((prevArray: MuseumItemType[]) => [...prevArray, item]);
  }

  // For use with React Masonry CSS package
  const breakpointColumnsObj = {
    default: 3,
    960: 2,
    650: 1,
  };

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
            {preSelectedImages.map((item: MuseumItemType, index: number) => {
              return (
                <div key={index} className="image-card card">
                  <img
                    key={item.id}
                    className="result-img"
                    src={`https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds/` + item.id + '.jpg'}
                    alt={item.title}
                    onClick={() => {
                      // Nothing happens when user clicks
                      // TODO: a modal opens so they can get a better look at the image?
                    }}
                  />
                  {whichButton(item)}
                </div>
              );
            })}
          </Masonry>
        </div>
      )}
    </section>
  );
}
