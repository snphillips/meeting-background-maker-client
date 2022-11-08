import React from 'react';

export default function DownloadButton() {
  return (
    <button className='download-button'>
      <a href='/meeting-backgrounds/arches.jpeg' download='arches.jpeg'>
        Download Set of Selected Images
      </a>
    </button>
  );
}
