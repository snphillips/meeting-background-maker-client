import React, { Component } from 'react';
// the spinner in an npm package
import { css } from "@emotion/core";
import LoadingSpinner from './LoadingSpinner';
import filterTerms from './filterTerms';

export default class Filters extends Component {
  render() {
    return (

    <div className="filters-component">

      <section className="app-description">
        <p>Generate backgrounds for your online meetings.</p>
        <p>All images are sourced from the Cooper Hewitt Museum's archive.</p>
      </section>


      <section className="filter-button-section">

       {filterTerms.map( item => {

          // console.log("button value:", item)

            return(

                <button key={item.id}
                        className=""
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


