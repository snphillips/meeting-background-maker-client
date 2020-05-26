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
        <option className="dropdown-item-style" value="pattern">pattern</option>
        <option className="dropdown-item-style" value="wall covering">wall covering</option>
        <option className="dropdown-item-style" value="wallpaper">wallpaper</option>
        <option className="dropdown-item-style" value="wall hanging">wall hanging</option>
        <option className="dropdown-item-style" value="textile design">textile desgin</option>
        <option className="dropdown-item-style" value="domestic interior">domestic interior</option>
        <option className="dropdown-item-style" value="carpet">carpet</option>

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
