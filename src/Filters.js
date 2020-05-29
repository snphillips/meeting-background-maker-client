import React, { Component } from 'react';
// the spinner in an npm package
import { css } from "@emotion/core";
import LoadingSpinner from './LoadingSpinner';

export default class Filters extends Component {
  render() {
    return (

    <div className="component">
      <form onSubmit={this.props.handleDropdownSubmit}>

      <select id="tag"
              value={this.props.parent_state.value}
              onChange={this.props.handleDropdownChange}
              >

        <option className="dropdown-item-style" value="accountants">choose search keyword</option>
        <option className="dropdown-item-style" value="spectrum">spectrum 8</option>
        <option className="dropdown-item-style" value="carpet design">carpet design 9</option>
        <option className="dropdown-item-style" value="wallpaper">wallpaper 21</option>
        <option className="dropdown-item-style" value="abstract">abstract</option>
        <option className="dropdown-item-style" value="gardens">gardens 41</option>
        <option className="dropdown-item-style" value="textile">textile 44</option>
        <option className="dropdown-item-style" value="modernism">modernism 59</option>
        <option className="dropdown-item-style" value="textile design">textile design 79</option>
        <option className="dropdown-item-style" value="sidewall">sidewall 83</option>
        <option className="dropdown-item-style" value="wallcovering">wallcovering 93</option>

      </select>


        <input type="submit"
               className="button"
               id="submit-button"
               value="submit" />



    </form>

    <LoadingSpinner loading={this.props.loading} />
    </div>

    );
  }
}


        // <option className="dropdown-item-style" value="graphic designers">graphic designers</option>
        // <option className="dropdown-item-style" value="industrial design">industrial design</option>
        // <option className="dropdown-item-style" value="intricate">intricate</option>
        // <option className="dropdown-item-style" value="modernism">modernism</option>
        // <option className="dropdown-item-style" value="posters">floral</option>
        // <option className="dropdown-item-style" value="simple">simple</option>
