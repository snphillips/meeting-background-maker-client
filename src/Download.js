import React from 'react';
import './index.css';

export default class Download extends React.Component {


  render() {

    return (
    <div className="component">

      <div className="download-set-placehodler">
        <p>No image sets to download</p>
      </div>



        <button>
          <a href="/meeting-backgrounds/arches.jpeg"
             download="arches.jpeg">
               Download Selected Images
          </a>
        </button>

    </div>
  );
}

}

