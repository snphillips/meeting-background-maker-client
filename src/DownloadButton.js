import React from 'react';
import './index.css';

export default class DownloadButton extends React.Component {
  constructor(props) {
  super(props);

  this.state = {

  };
}



  render() {

    return (

    <button className="download-button">

          <a href="/meeting-backgrounds/arches.jpeg"
             download="arches.jpeg">
               Download Set of Selected Images
          </a>


    </button>
  );
}

}

