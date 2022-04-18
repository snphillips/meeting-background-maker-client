import React from "react";
import filterTags from "../filterTags";
import filterTagsAll from "../filterTagsAll";
import LoadingSpinner from "../LoadingSpinner";



export default function FilterButtons(props) {

  return (
      <div className="filters-component">
        <div>
          <p className="filter-message">
            Select a search term to view images from the museum's collection.
          </p>
          <div className="spinner-container">
            <LoadingSpinner loading={props.loading} />
          </div>
        </div>

        <section className="filter-button-section">

          {filterTags.map((item, index) => {
            // console.log("button value:", item)

            return (
              <button
                key={index}
                className={props.activeButton === item ? "filter-button active" : "filter-button"}
                id={"filter-button-" + item}
                type="button"
                value={item}
                onClick={props.userSelectFilterTerm}
              >
              {item}
            </button>
            );
          })}
          <form onSubmit={props.handleDropdownSubmit} >
            <select onChange={props.userSelectFilterTerm} >
              {filterTagsAll.map((item, index) => (
                <option 
                  key={index}
                  value={item}
                  >
                    {item}
                </option>
              ))}
            </select>  
          </form>
        </section>
      </div>
    );
}
