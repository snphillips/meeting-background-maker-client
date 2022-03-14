import React from "react";
import filterTerms from "../filterTerms";
import LoadingSpinner from "../LoadingSpinner";

/*
It used to be that when the user selected one of the filter terms,
an axios call was made to the server, which was then made to the
museum, and results were returned. The problem with this strategy is
that it was sloooow, and didn't make sense b/c the images don't
change often so there's no need to get fresh images every time.

The new strategy is to write a script that is run by the server to get
all the images in advance, manupulate them, then store them either with
the server or client. This way, all the hard work of calling the museum,
and manipulating the images has been done in advance.
*/

export default function FilterButtons(props) {
  return (
      <div className="filters-component">
        <div>
          <p className="filter-message">
            Select a search term to view images from the museum's collection.
          </p>
        </div>

        <section className="filter-button-section">
          {filterTerms.map((item, index) => {
            // console.log("button value:", item)
            return (
                <button
                  key={index}
                  className="filter-button"
                  id={"filter-button-" + item}
                  // type="submit"
                  type="button"
                  value={item}
                  onClick={props.userSelectFilterTerm}
                >
                {item}
              </button>
            );
          })}

          <div className="spinner-container">
            <LoadingSpinner loading={props.loading} />
          </div>
        </section>
      </div>
    );
}
