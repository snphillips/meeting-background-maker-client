import React from 'react';
import Filters from './Filters';
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

      <section className="component">


        <div id="user-generated-set-window">


          <Filters handleFilterSubmit={this.handleFilterSubmit}
                   parent_state={this.state}
                   loading={this.state.loading}
                   />

          <Results parentState={this.state}
                   preSelectedImages={this.props.preSelectedImages}
                   toggleFilterResultsPlacehodler={this.toggleFilterResultsPlacehodler}
                   whichButton={this.props.whichButton}
                   />

          <SelectedImages parentState={this.state}
                          selectedImages={this.props.selectedImages}
                          toggleSelectedImagesComponent={this.state.toggleSelectedImagesComponent}
                          zipDownloadFolderSelectedImages={this.zipDownloadFolderSelectedImages}
                          />

        </div>

      </section>


    );
  }

}

