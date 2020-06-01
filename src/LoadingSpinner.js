import React from 'react';
//react-spinners is an npm package
import { css } from "@emotion/core";
import { BeatLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;`;

// console.log("spinner")

export default class LoadingSpinner extends React.Component {


  render() {
    return (
      <span className='sweet-loading'>
        <BeatLoader
          className={override}
          sizeUnit={"px"}
          // size={32}
          height={32}
          color={'#fff'}
          loading={this.props.loading}
        />
      </span>
    )
  }
}
