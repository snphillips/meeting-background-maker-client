import React from 'react';
import Results from './Results.js';
import SelectedImages from './SelectedImages.js';


export default class UserGeneratedSetComponent extends React.Component {
  constructor(props) {
  super(props);

  this.state = {

  };
}



  render() {

    return (

      <div id="user-generated-set-window">

        <Results parentState={this.state}
                 preSelectedImages={this.props.preSelectedImages}
                 toggleFilterResultsPlacehodler={this.toggleFilterResultsPlacehodler}
                 whichButton={this.whichButton}
                 />

        <SelectedImages parentState={this.state}
                        selectedImages={this.props.selectedImages}
                        toggleSelectedImagesComponent={this.state.toggleSelectedImagesComponent}
                        zipDownloadFolderSelectedImages={this.zipDownloadFolderSelectedImages}
                        />

      </div>


    );
  }

}

