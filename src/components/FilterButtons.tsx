import { ChangeEvent, MouseEvent } from 'react';
import filterButtonTermsArray from '../filterButtonTermsArray';
import filterTagsAllArray from '../filterTagsAllArray';
import LoadingSpinner from '../LoadingSpinner';
import { FilterTermType } from '../types';

type Props = {
  activeButton: FilterTermType | 'button-id';
  loading: boolean;
  userSelectsFilterTerm: (event: MouseEvent<HTMLButtonElement> | ChangeEvent<HTMLSelectElement>) => void;
};

export default function FilterButtons({ activeButton, loading, userSelectsFilterTerm }: Props) {
  return (
    <div className="filters-component">
      <div>
        <p className="filter-message">Select a search term to view images from the museum's collection.</p>
        <div className="spinner-container">
          <LoadingSpinner loading={loading} />
        </div>
      </div>

      <section className="filter-button-section">
        {filterButtonTermsArray.map((item: FilterTermType) => (
          <button
            key={item}
            className={activeButton === item ? 'filter-button active' : 'filter-button'}
            id={`filter-button-${item}`}
            type="button"
            value={item}
            onClick={userSelectsFilterTerm}
          >
            {item}
          </button>
        ))}
        <select onChange={userSelectsFilterTerm}>
          <option>more search terms</option>
          {filterTagsAllArray.map((item: FilterTermType, index: number) => (
            <option key={`option-${index}-${item}`} value={item}>
              {item}
            </option>
          ))}
        </select>
      </section>
    </div>
  );
}
