import React from 'react';
import filterTagButtons from '../filterTagButtons.js';
import filterTagsAll from '../filterTagsAll.js';
// TODO: enable LoadingSpinner after converting to TS
// import LoadingSpinner from '../LoadingSpinner.js';
import { FilterTermType }  from '../types'

type Props = {
  activeButton: FilterTermType | 'button-id';
  handleDropdownSubmit: (arg: any) => void;
  // loading: boolean;
  userSelectsFilterTerm: (param: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function FilterButtons({
  activeButton,
  handleDropdownSubmit,
  // loading,
  userSelectsFilterTerm,
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
        {filterTagButtons.map((item: FilterTermType, index: number) => {
          console.log('filterTagButtons item:', item)
          return (
            <button
              key={index}
              className={activeButton === item ? 'filter-button active' : 'filter-button'}
              id={'filter-button-' + item}
              type='button'
              value={item}
              onClick={userSelectsFilterTerm}
            >
              {item}
            </button>
          );
        })}
        <form onSubmit={handleDropdownSubmit}>
          <select 
              // onChange={userSelectsFilterTerm}
          >
            <option>more search terms</option>

            {filterTagsAll.map((item: FilterTermType, index: number) => (
              
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
