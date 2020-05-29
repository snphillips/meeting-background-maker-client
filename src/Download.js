import React from 'react';
import './index.css';

function Download() {
  return (
    <div className="component">

      <div className="download-set-placehodler">
        <p>No image sets to download</p>
      </div>


      <div className="download">Download this collection to your hard drive.</div>

        <button>
          <a href="/meeting-backgrounds/arches.jpeg" download="arches.jpeg">Download</a>
        </button>

    </div>
  );
}

export default Download;


        // <a href="/meeting-backgrounds.zip" download="meeting-backgrounds.zip">Download</a>


        // need to zip the folder of images before user can download the folder
