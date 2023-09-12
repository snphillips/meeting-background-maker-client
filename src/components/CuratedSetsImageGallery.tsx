import React from 'react';
import { curatedSetsType, curatedBackgroundImageType }  from '../types.ts'

/*
This section contains the curated set images.
The 'download image set' button is in CuratedSetsComponent.
*/

type Props = {
  curatedSetsArray: curatedSetsType[],
  index: number,
};

export default function CuratedSetsImageGallery({ 
  curatedSetsArray,
  index 
}: Props) {
  let thisCuratedSet: curatedSetsType = curatedSetsArray[index];
  let allTheSetImages = thisCuratedSet.images;

  return (
    <div>
      <section
        className='curated-images-gallery'
        id={'curated-set-gallery-' + index}
        style={{ maxHeight: '4000px' }}
      >
        {allTheSetImages.map((item: curatedBackgroundImageType, index: number) => {
          return (
            <div key={index} id={'-curated-image-' + index} className='curated-image'>
              <img
                className='curated-list-img'
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
