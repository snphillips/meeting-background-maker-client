import React from 'react';
import './index.css';

function Download() {
  return (
    <div className="component">
      <div className="download">Download this collection to your hard drive.</div>

        <a href="/meeting-backgrounds/arches.jpeg" download="arhces.jpeg">Download</a>

    </div>
  );
}

export default Download;


        // <a href="/meeting-backgrounds.zip" download="meeting-backgrounds.zip">Download</a>


        // need to zip the folder of images before user can download the folder
