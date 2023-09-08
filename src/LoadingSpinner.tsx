import React from 'react';
// import { CSSProperties } from 'react';
// import { css } from '@emotion/react';
// react-spinners is an npm package
import BeatLoader from 'react-spinners/BeatLoader';

// const override: CSSProperties = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

type PropsType = {
  loading: boolean,
};

export default function LoadingSpinner({ loading }: PropsType) {
  return (
    <div className="loading-div">
      <span className="sweet-loading">
        <BeatLoader
          // className={override}
          // sizeUnit={'px'}
          // height={32}
          color={'#fff'}
          loading={loading} 
        />
      </span>
    </div>
  );
}
