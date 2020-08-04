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

      <section className="component">


        <div id="user-generated-set-window">

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


          // <div className="user-generated-set-div">
          //   <h2 className="set-heading user-generated-set-heading"
          //       onClick={ (event) => {
          //         this.setState({displayUserGeneratedSetComponent: true}, () => {
          //           this.props.toggleDisplayBlockOrNone(this.state.displayUserGeneratedSetComponent, "#user-generated-set-window")
          //           console.log("1) show User Generated Set Component", this.state.displayUserGeneratedSetComponent)
          //         })
          //         this.setState({displayCuratedSetComponent: false}, () => {
          //           this.props.toggleDisplayBlockOrNone(this.state.displayCuratedSetComponent, "#curated-set-window")
          //           console.log("2) hide Curated Set Component", this.state.displayCuratedSetComponent)
          //         })
          //       }}>
          //       Your Backgrounds
          //   </h2>
          // </div>
