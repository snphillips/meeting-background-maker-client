import React, { Component } from 'react';
import './index.css';
import CuratedSetsImageGallery from './CuratedSetsImageGallery';


export default class CuratedSetsComponent extends Component {


  render() {

    let curatedSetsArray = this.props.curatedSets
    console.log("curatedSetsArray in CuratedSetsComponent:", curatedSetsArray)


    return (


      <section className="component">

        <h2>Curated Sets</h2>

        <div id="curated-sets-list">


          {curatedSetsArray.map( (item, index) => {


          console.log("button value:", item)

            return(

              <div key={item.setName + "card"}
                   className="curated-set-card card"
                   value={item.setName}
                    >

                <div key={item.setName + "label"}
                     className="curated-set-label"
                     type="download"
                     value={item.setName}
                     onClick={ (event) => {
                      console.log("button value is:", event.target.value)
                      // this.props.handleFilterSubmit(event)
                    }}>
                     {item.setName}
                </div>


                <a>
                  <img className="curated-list-img-cover"
                       src={item.images[0].imageURL}
                       alt={item.images[0].title}
                       value={index}
                       // onClick={ (event) => {
                       //  // console.log("view images in set:", item.setName)
                       //  this.props.generateCuratedSetImages(item.setName, index)
                       // }}
                    />
                </a>


                <CuratedSetsImageGallery parentState={this.state}
                                         curatedSetsArray={curatedSetsArray}
                                         index={index}
                                         />



                <button key={item.setName + "view-allbutton"}
                        className="curated-set-view-all-button"
                        type=""
                        value={index}
                        onClick={ (event) => {
                          // console.log("view images in set:", item.setName)
                          this.props.viewCuratedSetImages(item.setName, index)
                        }}>

                  <a>
                    view images in set
                  </a>
                </button>

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




                // <CuratedSetsImageGallery curatedSets={this.state.curatedSets}
                //                          index={this.props.index} />
