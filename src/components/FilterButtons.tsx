import React from 'react';
import filterTagButtons from '../filterTagButtons.js';
import filterTagsAll from '../filterTagsAll.js';
// TODO: enable LoadingSpinner after converting to TS
// import LoadingSpinner from '../LoadingSpinner.js';
import { FilterTagsType }  from '../types.ts'

type Props = {
  activeButton: FilterTagsType | 'button-id';
  handleDropdownSubmit: () => void;
  // loading: boolean;
  userSelectFilterTerm: () => void;
}

export default function FilterButtons({
  activeButton,
  handleDropdownSubmit,
  // loading,
  userSelectFilterTerm,
}: Props) {

  console.log('activeButton:', activeButton)
  return (
    <div className='filters-component'>
      <div>
        <p className='filter-message'>
          Select a search term to view images from the museum's collection.
        </p>
        <div className='spinner-container'>
          {/* <LoadingSpinner loading={loading} /> */}
        </div>
      </div>

      <section className='filter-button-section'>
        {filterTagButtons.map((item: FilterTagsType, index: number) => {
          console.log('filterTagButtons item:', item)
          return (
            <button
              key={index}
              className={activeButton === item ? 'filter-button active' : 'filter-button'}
              id={'filter-button-' + item}
              type='button'
              value={item}
              onClick={userSelectFilterTerm}
            >
              {item}
            </button>
          );
        })}
        <form onSubmit={handleDropdownSubmit}>
          <select onChange={userSelectFilterTerm}>
            <option>more search terms</option>

            {filterTagsAll.map((item: FilterTagsType, index: number) => (
              
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </form>
      </section>
    </div>
  );
}
