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


        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="spectrum" />

        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="carpet design" />

        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="wallpaper" />

        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="abstract" />

        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="gardens" />

        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="textile" />

        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="modernism" />

        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="textile design" />

        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="sidewall" />

        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="wallcovering" />

        <input onChange={this.props.handleChange}
               onSubmit={this.props.handleSubmit}
               type="submit"
               className="button"
               id="submit-button"
               value="1980s" />





        <form ref="form"
              value={this.props.parent_state.value}
              onSubmit={this.props.handleSubmit}
              >
          <button type="submit"
                  value="1980s"
                  onChange={this.props.handleChange}
                  >
                  1980s
          </button>
       </form>




      <span className="spinner-container">
        <LoadingSpinner loading={this.props.loading} />
      </span>


      </section>

    </div>

    );
  }
}



              // value={this.props.parent_state.value}
              // onChange={this.props.handleChange}








