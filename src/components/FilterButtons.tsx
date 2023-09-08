import React from 'react';
import filterTagButtons from '../filterTagButtons';
import filterTagsAll from '../filterTagsAll';
import LoadingSpinner from '../LoadingSpinner';

type PropsType = {
  loading: any,
  activeButton: any,
  userSelectFilterTerm: any,
  handleDropdownSubmit: any
};

export default function FilterButtons({
  loading,
  activeButton,
  userSelectFilterTerm,
  handleDropdownSubmit,
}: PropsType) {
  return (
    <div className="filters-component">
      <div>
        <p className="filter-message">Select a search term to view images from the museum&apos;s collection.</p>
        <div className="spinner-container">
          <LoadingSpinner loading={loading} />
        </div>
      </div>

      <section className="filter-button-section">
        {filterTagButtons.map((item, index) => {
          return (
            <button
              key={index}
              className={activeButton === item ? 'filter-button active' : 'filter-button'}
              id={'filter-button-' + item}
              type="button"
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

            {filterTagsAll.map((item, index) => (
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
