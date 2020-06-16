import React, { Component } from 'react';
import './index.css';
import CuratedSetsImageGallery from './CuratedSetsImageGallery';


export default class CuratedSetsComponent extends Component {
    constructor(props) {
    super(props);

    this.state = {
      imagesRevealed: true
    };


    // This binding is necessary to make `this` work in the callback
    // this.toggleCuratedSetImages = this.toggleCuratedSetImages.bind(this);


  }



     // toggleCuratedSetImages(index){
     //  console.log("toggle curated set images for: ", index)
     //  // {this.state.imagesRevealed ? 'Hide details' : 'Show details'}
     // }



  render() {


    let curatedSetsArray = this.props.curatedSets
    console.log("curatedSetsArray in CuratedSetsComponent:", curatedSetsArray)


    return (


      <section className="component">

        <h2>Curated Sets</h2>

        <div id="curated-sets-list">


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


                <img src={item.images[0].imageURL}
                     class="curated-set-cover-image" />


                <CuratedSetsImageGallery parentState={this.state}
                                         curatedSetsArray={curatedSetsArray}
                                         index={index}
                                         />




                <button key={item.setName + "downlad-button"}
                        className="curated-set-download-button"
                        type="download"
                        value={item.setName}
                        onClick={ (event) => {
                          console.log("download selected images")
                          this.props.zipDownloadFolderCuratedSet(item.setName, index)
                        }}>
                        download image set

                </button>

              </div>
            )
        })}


        </div>

      </section>
  );
  }




}




                 // <img className="curated-list-img-cover"
                 //      src={item.images[0].imageURL}
                 //      alt={item.images[0].title}
                 //      value={index}
                 //   />

                // <button key={item.setName + "view-allbutton"}
                //         className="curated-set-view-all-button"
                //         type=""
                //         value={index}
                //         onClick={ (event) => {
                //           // console.log("view images in set:", item.setName)
                //           // this.props.toggleCuratedSetImages(item.setName, index)
                //         }}>

                //   <a>
                //     view images in set
                //   </a>
                // </button>
