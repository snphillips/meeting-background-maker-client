import React from 'react';
import filterButtonTermsArray from '../filterButtonTermsArray';
import filterTagsAllArray from '../filterTagsAllArray';
import LoadingSpinner from '../LoadingSpinner';
import { FilterTermType }  from '../types'

type Props = {
  activeButton: FilterTermType | 'button-id';
  loading: boolean;
  userSelectsFilterTerm: (param: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function FilterButtons({
  activeButton,
  loading,
  userSelectsFilterTerm,
}: Props) {

  return (
    <div className='filters-component'>
      <div>
        <p className='filter-message'>
          Select a search term to view images from the museum's collection.
        </p>
        <div className='spinner-container'>
          <LoadingSpinner loading={loading} />
        </div>
      </div>

      <section className='filter-button-section'>
        {filterButtonTermsArray.map((item: FilterTermType, index: number) => {
          return (
            <button
              key={index}
              className={activeButton === item ? 'filter-button active' : 'filter-button'}
              id={'filter-button-' + item}
              type='button'
              data-value={item}
              onClick={userSelectsFilterTerm}
            >
              {item}
            </button>
          );
        })}
        <form >
          <select >
            <option>more search terms</option>

            {filterTagsAllArray.map((item: FilterTermType, index: number) => (
              
              <option key={index} data-value={item}>
                {item}
              </option>
            ))}
          </select>
        </form>
      </section>
    </div>
  );
}
