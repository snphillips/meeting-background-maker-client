import React from 'react';
import { css } from "@emotion/react";
// react-spinners is an npm package
import BeatLoader from 'react-spinners/BeatLoader';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default function LoadingSpinner(props) {
  return (
    <span className='sweet-loading'>
      <BeatLoader
        className={override}
        sizeUnit={"px"}
        // size={32}
        height={32}
        color={'#000'}
        loading={props.loading}
      />
    </span>
  )
}