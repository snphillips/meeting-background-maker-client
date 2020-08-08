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


   componentDidMount() {
     this.props.toggleDisplayBlockOrNone(this.state.displayResultsComponent, "#results-component")
     this.props.toggleDisplayBlockOrNone(this.state.displaySelectedImages, "#selected-images-component")
   }



  render() {



    return (


        <section id="user-generated-set-window">


          <Filters handleFilterSubmit={this.props.handleFilterSubmit}
                   loading={this.props.loading}
                   />

          <Results parentState={this.state}
                   preSelectedImages={this.props.preSelectedImages}
                   toggleFilterResultsPlacehodler={this.toggleFilterResultsPlacehodler}
                   whichButton={this.props.whichButton}
                   />

          <SelectedImages selectedImages={this.props.selectedImages}
                          toggleSelectedImagesComponent={this.state.toggleSelectedImagesComponent}
                          zipDownloadFolderSelectedImages={this.zipDownloadFolderSelectedImages}
                          toggleDisplayBlockOrNone={this.toggleDisplayBlockOrNone}
                          />

        </section>


    );
  }

}

