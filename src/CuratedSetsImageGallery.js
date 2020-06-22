import React, { Component } from 'react';
// import './index.css';
import _Lodash from 'lodash';


export default class CuratedSetsImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesRevealed: false,
      viewButtonMessage: "view images in set"
    };


    // This binding is necessary to make `this` work in the callback
    this.toggleCuratedSetImages = this.toggleCuratedSetImages.bind(this);
  }

     toggleCuratedSetImages(set, index){
      console.log("toggle curated set images for: ", set, index)
      {this.state.imagesRevealed ? this.setState({imagesRevealed: false}) : this.setState({imagesRevealed: true})}
      console.log("this.state.imagesRevealed is ", this.state.imagesRevealed)
      {this.state.imagesRevealed ? this.setState({viewButtonMessage: "view images in set"}) : this.setState({viewButtonMessage: "hide images in set"})}
     }



    render() {

        let index = this.props.index
        let thisCuratedSet = this.props.curatedSetsArray[index]
        let allTheSetImages = thisCuratedSet.images
        let allTheSetImagesMinusCover = _Lodash.drop(allTheSetImages, 1)


      return (

       <div>
        <section className="curated-images-gallery"
                 id={"curated-set-gallery-" + index}
                 style={{maxHeight: this.state.imagesRevealed ? '4000px': 0}}
                 >


              {allTheSetImagesMinusCover.map( (item, index) => {

                // console.log("allTheSetImages item.id:", item.id)
                // console.log("allTheSetImages item.title:", item.title)
                // console.log("allTheSetImages item.url:", item.url)
                // console.log("allTheSetImages item.imageURL:", item.imageURL)

                return(

                    <div key={index}
                         id={"-curated-image-" + index}
                         class="curated-image"
                         // style={{display: this.state.imagesRevealed ? 'block': 'none'}}
                         >

                      <a href={item.url}>

                        <img className="curated-list-img"
                             src={item.imageURL}
                             alt={item.title}
                        />

                      </a>

                    </div>
                )

              })}

        </section>
                    <button key={index + "-view-allbutton"}
                            id={thisCuratedSet + "-view-allbutton"}
                            className="curated-set-view-all-button"
                            type=""
                            value={index}
                            onMouseOver={ (event, index) => {
                              // console.log("view images in set:", thisCuratedSet.setName)
                            }}
                            onClick={ (event, index) => {
                              this.toggleCuratedSetImages(thisCuratedSet, index)
                              let imagesRevealed = this.state.imagesRevealed
                            }}>


                            {this.state.viewButtonMessage}

                    </button>


        </div>


      )
    }

}
