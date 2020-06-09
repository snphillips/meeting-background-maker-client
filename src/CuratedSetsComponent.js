import React, { Component } from 'react';
import './index.css';


export default class CuratedSetsComponent extends Component {


  render() {

    let curatedSetsArray = this.props.curatedSets
    console.log("curatedSetsArray:", curatedSetsArray)


    return (


      <section className="component">

        <h2>Curated Sets</h2>

        <div id="curated-sets-list">


          {curatedSetsArray.map( (item, index) => {

          // console.log("button value:", item)

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
                       onClick={ (event) => {
                        console.log(item.images[0].imageURL)
                        this.props.viewCuratedSetImages()
                       }}
                    />
                </a>

                <button key={item.setName + "view-allbutton"}
                        className="curated-set-view-all-button"
                        type=""
                        value={item.setName}
                        onClick={ (event) => {
                          console.log("view images in set:", event.target.value)
                          this.props.viewCuratedSetImages()
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


                  // <a href={"/meeting-backgrounds/" + item.setName + "/" + "155203_a42ace55852a053a_b.jpg"}
                  //    download="155203_a42ace55852a053a_b.jpg">
                  //      download image set
                  // </a>
