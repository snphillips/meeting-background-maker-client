import React from 'react';
import './index.css';

export default class DownloadButton extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    buttonTextValue: 'Download Set of Selected Images'
  };



}



  render() {

    return (
    <div className="component">

        <button>
          <a href="/meeting-backgrounds/arches.jpeg"
             download="arches.jpeg">
               {this.state.buttonTextValue}
          </a>
        </button>

    </div>
  );
}

}

