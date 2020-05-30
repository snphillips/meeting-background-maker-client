import React, { Component } from 'react';
// the spinner in an npm package
import { css } from "@emotion/core";
import LoadingSpinner from './LoadingSpinner';
import searchTerms from './searchTerms';

export default class Filters extends Component {
  render() {
    return (

    <div className="filters-component">

      <section className="app-description">
        <p>Hide your shameful apartment from your cowokers, colleauges and students by generating cool backgrounds for your online meetings.</p>
        <p>All source images are from the Cooper Hewitt Museum's archive.</p>
      </section>


      <section className="filter-button-section">

       {searchTerms.map( item => {

          // console.log("button value:", item)

            return(

                <button type="submit"
                        value={item}
                        onMouseOver={ (event) => {
                          console.log("button value is:", event.target.value)
                        }}
                        onClick={ (event) => {
                          console.log("button value is:", event.target.value)
                          this.props.handleSubmit(event)
                        }}
                        >
                        {item}
                </button>

              )

             })
       }

      <span className="spinner-container">
        <LoadingSpinner loading={this.props.loading} />
      </span>


      </section>

    </div>

    );
  }
}


