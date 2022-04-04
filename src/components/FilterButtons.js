import React from "react";
import filterTerms from "../filterTerms";
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

          {filterTerms.map((item, index) => {
            // console.log("button value:", item)

            return (
              <button
                key={index}
                className={`filter-button ${props.searchButtonClass}`}
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
              {props.allTags.map((item, index) => (
                <option 
                  key={index}
                  value={item.name}
                  >
                    {item.name}
                </option>
              ))}
            </select>  
          </form>
        </section>
      </div>
    );
}
