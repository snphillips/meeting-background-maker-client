import React, { Component } from 'react';
import './index.css';


export default class CuratedSetsImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imagesRevealed: false
    };


    // This binding is necessary to make `this` work in the callback
    this.toggleCuratedSetImages = this.toggleCuratedSetImages.bind(this);
  }

     toggleCuratedSetImages(set, index){
      console.log("toggle curated set images for: ", set, index)
      {this.state.imagesRevealed ? this.setState({imagesRevealed: false}) : this.setState({imagesRevealed: true})}
      console.log("this.state.imagesRevealed is ", this.state.imagesRevealed)
     }



    render() {

        let index = this.props.index
        let thisCuratedSet = this.props.curatedSetsArray[index]
        let allTheSetImages = thisCuratedSet.images
        // removing first item from array b/c the cover is the first image
        // allTheSetImages.shift();
        // console.log("this.props.curatedSetsArray:", allTheSetImages)
        // console.log("index:", index)

      return (

        <div className="curated-images-gallery"
             id={"curated-set-gallery-" + index}
              >


              {allTheSetImages.map( (item, index) => {

                // console.log("allTheSetImages item.id:", item.id)
                // console.log("allTheSetImages item.title:", item.title)
                // console.log("allTheSetImages item.url:", item.url)
                // console.log("allTheSetImages item.imageURL:", item.imageURL)

                return(

                    <div key={index}
                         id={index + "-image-gallery"}
                         style={{display: this.state.imagesRevealed ? 'block': 'none'}}>
                      <a href={item.url}>
                        <img className="curated-list-img"
                             src={item.imageURL}
                             alt={item.title}
                        />
                      </a>
                    </div>
                )

              })}

                    <button key={index + "-view-allbutton"}
                            id={thisCuratedSet + "-view-allbutton"}
                            className="curated-set-view-all-button"
                            type=""
                            value={index}
                            onMouseOver={ (event, index) => {
                              // console.log("view images in set:", item.setName)
                              this.toggleCuratedSetImages(thisCuratedSet, index)
                            }}>

                            view images in set

                    </button>


        </div>


      )
    }

}
