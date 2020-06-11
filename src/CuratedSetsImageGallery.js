import React, { Component } from 'react';
import './index.css';


export default class CuratedSetsImageGallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleryOpen: true
    };


  }


    render() {

        let index = this.props.index
        let thisCuratedSet = this.props.curatedSetsArray[index]
        let allTheSetImages = thisCuratedSet.images
        console.log("this.props.curatedSetsArray pineapple:", allTheSetImages)
        console.log("index:", index)

      return (

        <div className="curated-images-gallery">


              {allTheSetImages.map( (item) => {

                console.log("allTheSetImages item.id:", item.id)
                console.log("allTheSetImages item.title:", item.title)
                console.log("allTheSetImages item.url:", item.url)
                console.log("allTheSetImages item.imageURL:", item.imageURL)

                return(

                    <div>
                      <a href={item.url}>
                        <img className="curated-list-img"
                             src={item.imageURL}
                             alt={item.title}
                        />
                      </a>
                    </div>
                )

              })}


        </div>


      )
    }

}
