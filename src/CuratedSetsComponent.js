import React, { Component } from 'react';
import './index.css';
import CuratedSetsImageGallery from './CuratedSetsImageGallery';


export default class CuratedSetsComponent extends Component {
    constructor(props) {
    super(props);

    this.state = {

    };


    // This binding is necessary to make `this` work in the callback

  }


  render() {


    let curatedSetsArray = this.props.curatedSets
    // console.log("curatedSetsArray in CuratedSetsComponent:", curatedSetsArray)



    return (


      <section className="component">

        <h2>Curated Sets</h2>

        <div id="curated-sets-list"
             className="image-grid" >


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


        </div>

      </section>
  );
  }

                // this works, but is hard-coded
                // <a href= {"/meeting-backgrounds/curatedSets/" + "gourmet" + ".zip"}  download >

}

