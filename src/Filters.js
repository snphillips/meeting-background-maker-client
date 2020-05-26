import React, { Component } from 'react';
// the spinner in an npm package
// import LoadingSpinner from './LoadingSpinner';

export default class Filters extends Component {
  render() {
    return (

    <form className="component"
    onSubmit={this.props.handleDropdownSubmit}
    >

      <select id="tag"
              value={this.props.parent_state.value}
              onChange={this.props.handleDropdownChange}
              >

        <option value="exoticism">choose search keyword</option>
        <option className="dropdown-item-style" value="sidewall">sidewall</option>
        <option className="dropdown-item-style" value="floor">floor</option>
        <option className="dropdown-item-style" value="graphic design">graphic design</option>
        <option className="dropdown-item-style" value="art deco">art deco</option>
        <option className="dropdown-item-style" value="art nouveau">art nouveau</option>
        <option className="dropdown-item-style" value="wallpaper">wallpaper</option>
        <option className="dropdown-item-style" value="circular">circular</option>
        <option className="dropdown-item-style" value="geometric">geometric</option>
        <option className="dropdown-item-style" value="textile design">textile desgin</option>

      </select>

      <input type="submit"
             className="button"
             id="submit-button"
             value="submit" />


    </form>

    );
  }
}

      // <LoadingSpinner loading={this.props.loading} />

        // <option className="dropdown-item-style" value="graphic designers">graphic designers</option>
        // <option className="dropdown-item-style" value="industrial design">industrial design</option>
        // <option className="dropdown-item-style" value="intricate">intricate</option>
        // <option className="dropdown-item-style" value="modernism">modernism</option>
        // <option className="dropdown-item-style" value="posters">floral</option>
        // <option className="dropdown-item-style" value="simple">simple</option>
