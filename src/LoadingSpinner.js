import React from 'react';
import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader.js';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function LoadingSpinner({ loading }) {
  return (
    <div className='loading-div'>
      <span className='sweet-loading'>
        <BeatLoader
          className={override}
          color={'#fff'}
          height={32}
          loading={loading}
          sizeunit={'px'}
        />
      </span>
    </div>
  );
}
