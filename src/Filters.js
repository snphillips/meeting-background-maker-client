import React, { Component } from 'react';
import filterTerms from './filterTerms';
// the spinner is an npm package that also uses @emotion
import { css } from "@emotion/core";
import LoadingSpinner from './LoadingSpinner';

export default class Filters extends Component {
  render() {
    return (

    <div className="filters-component">

      <section className="app-description">
        <p>Generate backgrounds for video meetings.</p>
        <p>All images are sourced from the Cooper Hewitt Museum's archive.</p>
      </section>


      <section className="filter-button-section">

       {filterTerms.map( (item, index) => {

          // console.log("button value:", item)

            return(

                <button key={index}
                        className="filter-button"
                        id={"filter-button-" + item}
                        type="submit"
                        value={item}
                        onClick={ (event) => {
                          console.log("button value is:", event.target.value)
                          this.props.handleFilterSubmit(event)
                        }}>
                         {item}
                </button>
            )
        })}

      <span className="spinner-container">
        <LoadingSpinner loading={this.props.loading} />
      </span>


      </section>

    </div>

    );
  }
}


