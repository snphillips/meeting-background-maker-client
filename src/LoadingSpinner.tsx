import React from 'react';
import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader.js';

const override: any  = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

type Props = {
  loading: boolean;
};

export default function LoadingSpinner({ loading }: Props) {
  return (
    <div className='loading-div'>
      <span className='sweet-loading'>
        <BeatLoader
          className={override}
          color={'#fff'}
          loading={loading}
        />
      </span>
    </div>
  );
}
