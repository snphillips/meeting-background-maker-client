import React from 'react';
import { CuratedSetsType, CuratedBackgroundImageType } from '../types';

/*
This section contains the curated set images.
The 'download image set' button is in CuratedSetsComponent.
*/

type Props = {
  curatedSetsArray: CuratedSetsType[];
  index: number;
};

export default function CuratedSetsImageGallery({ curatedSetsArray, index }: Props) {
  let thisCuratedSet: CuratedSetsType = curatedSetsArray[index];
  let allTheSetImages = thisCuratedSet.images;

  return (
    <div>
      <section className="curated-images-gallery" id={'curated-set-gallery-' + index} style={{ maxHeight: '4000px' }}>
        {allTheSetImages.map((item: CuratedBackgroundImageType, index: number) => {
          return (
            <div key={index} id={'-curated-image-' + index} className="curated-image">
              <img
                className="curated-list-img"
                src={item.imageURL}
                alt={item.title}
                onClick={(index) => {
                  // TODO: open a modal?
                  console.log(index, 'clicked');
                }}
              />
            </div>
          );
        })}
      </section>
    </div>
  );
}
