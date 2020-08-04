import React, { Component } from 'react';
import './index.css';
import CuratedSetsImageGallery from './CuratedSetsImageGallery';
import Masonry from 'react-masonry-css';


export default class CuratedSetsComponent extends Component {
    constructor(props) {
    super(props);

    this.state = {

    };

    // This binding is necessary to make `this` work in the callback

  }


  render() {

    // let displayUserGeneratedSetComponentWindow = this.props.displayUserGeneratedSetComponent
    // let displayCuratedSetComponentWindow = this.props.displayCuratedSetComponent
    let curatedSetsArray = this.props.curatedSets
    // console.log("curatedSetsArray in CuratedSetsComponent:", curatedSetsArray)


   // For use with Masonry package
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };





    return (


      <section className="component">


        <div id="curated-set-window">

          <Masonry breakpointCols={breakpointColumnsObj}
                   className="my-masonry-grid curated-sets-list"
                   columnClassName="my-masonry-grid_column"
                   >


            {curatedSetsArray.map( (item, index) => {

            // console.log("curatedSetsArray[0].images[0].imageURL:", curatedSetsArray[0].images[0].imageURL)

              return(

                <div key={index + "-card"}
                     className="curated-set-card card"
                     value={item.setName}
                      >

                  <div key={index + "-label"}
                       className="curated-set-label"
                       value={item.setName}
                       onClick={ (event) => {
                        console.log("button value is:",  event.target.value)
                        // this.props.handleFilterSubmit(event)
                      }}>
                       {item.setName}
                  </div>


                  <img src={item.images[0].localImageURL}
                       id={"curated-set-cover-image-" + index}
                       className="curated-set-cover-image"
                       />

                  <CuratedSetsImageGallery parentState={this.state}
                                           curatedSetsArray={curatedSetsArray}
                                           index={index}
                                           />

                  <a href= {"/meeting-backgrounds/curatedSets/" + item.machineName + ".zip"}  download >

                    <button key={item.setName + "downlad-button"}
                            className="curated-set-download-button"
                            type="download"
                            value={item.setName}
                            onClick={ (event) => {
                              console.log("download selected images")
                              // this.props.zipDownloadFolderCuratedSet(item.setName, index)
                            }}>
                            download image set

                    </button>
                  </a>

                </div>
              )
          })}


          </Masonry>

        </div>

      </section>
  );
  }


}


          // <div className="curated-set-heading-div">
          //   <h2 className="set-heading curated-set-heading"
          //       onClick={ (event) => {
          //         this.setState({displayCuratedSetComponent: true}, () => {
          //           this.props.toggleDisplayBlockOrNone(this.state.displayCuratedSetComponent, "#curated-set-window")
          //           console.log("1) click to show Curated Set Component", this.state.displayCuratedSetComponent)
          //         })
          //         this.setState({displayUserGeneratedSetComponent: false}, () => {
          //           this.props.toggleDisplayBlockOrNone(this.state.displayUserGeneratedSetComponent, "#user-generated-set-window")
          //           console.log("2) hide User Generated Set Component", this.state.displayUserGeneratedSetComponent)
          //         })
          //       }}>
          //       Curated Sets
          //   </h2>
          // </div>
