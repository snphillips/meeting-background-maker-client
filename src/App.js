import React, { Component } from 'react';
import axios from 'axios';
import _Lodash from 'lodash';
import Header from './Header';
import Filters from './Filters';
import Results from './Results';
// import Download from './Download';
import DownloadButton from './DownloadButton';
import Instructions from './Instructions';
import CuratedSetsSection from './CuratedSetsSection';
import Footer from './Footer';
import blacklist from './blacklist';
import backgroundImages from './backgroundImages';
import SelectedImages from './SelectedImages';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // serverSource: 'https://art-thief.herokuapp.com/searchbytag',
      // serverSource: 'http://localhost:3000/searchbytag',
      loading: false, // the loading spinner
      filterResultsComponent: false,
      selectedImagesComponent: false,
      downloadSetComponent: true,
      value: 'smoking',
      preSelectedImages: [],
      selectedImages: [],

    };

    // This binding is necessary to make `this` work in the callback
    // this.handleChange = this.handleChange.bind(this);
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handleAddToCollectionSubmit = this.handleAddToCollectionSubmit.bind(this);
    this.handleRemoveFromCollectionSubmit = this.handleRemoveFromCollectionSubmit.bind(this);
    this.finesseImages = this.finesseImages.bind(this);
    this.removeBlacklistedImages = this.removeBlacklistedImages.bind(this);
    this.removeSkinnyImages = this.removeSkinnyImages.bind(this);
    // this.rotatePortraitImages = this.rotatePortraitImages.bind(this);
    this.shuffleBackgroundClipTextImage = this.shuffleBackgroundClipTextImage.bind(this);
    this.revealFilterResultsComponent = this.revealFilterResultsComponent.bind(this);
    this.revealSelectedImagesComponent = this.revealSelectedImagesComponent.bind(this);
    this.whichButton = this.whichButton.bind(this);
  }

// ***********************************
// End of constructor
// ***********************************

  handleFilterSubmit(event) {
    this.setState({value: event.target.value}, () => {
      this.cooperHewittSearchByTagFromAPI()
    });
    event.preventDefault();
  }

  handleAddToCollectionSubmit(item) {
    console.log("add to collection")
    let selectedImageArray = this.state.selectedImages
    selectedImageArray.push(item)
    this.revealSelectedImagesComponent()
    this.setState({selectedImages: selectedImageArray } )
  };

  handleRemoveFromCollectionSubmit(item) {
    console.log("removing this item from collection: ", item.title)
    let selectedImagesArray = this.state.selectedImages
    // using the _Lodash library to remove the item from the
    // array of selected images
    // https://lodash.com/docs/#reject
    selectedImagesArray = _Lodash.reject(selectedImagesArray, (theObject) => { return (theObject.id === item.id); } )
    this.setState({selectedImages: selectedImagesArray } )
  };


  whichButton(item) {
    // using the _Lodash library to quickly check if the button
    // belongs to an item that the user has selected or not
    // https://lodash.com/docs/#includes
    let buttonResult = ""

    if ( _Lodash.includes(this.state.selectedImages, item) ) {

      buttonResult =

      (<button type="submit"
               value={item}
               className="results-button-remove-from-collection"
               onClick={ (event) => {
                        console.log("button value is:", item, item.id)
                        this.handleRemoveFromCollectionSubmit(item)
                      }}> remove from collection
      </button>)

    } else {
      buttonResult =
      (<button type="submit"
               value={item}
               className="results-button-add-to-collection"
               onClick={ (event) => {
                  console.log("button value is:", item, item.id)
                  this.handleAddToCollectionSubmit(item)
                  }}> add to collection
      </button>)
    }
    return(buttonResult)
  };




  cooperHewittSearchByTagFromAPI() {
    // start the loading spinner
    this.setState({loading: true})

    // ${this.state.value} is whatever keyword the user chooses from the dropdown menu
    // The "response" does the following:
    // 1) stops the loading spinner
    // 2) removes the placeholder image
    // 3) returns a random item (image, title, description & link url)
    // axios.get(`https://art-thief.herokuapp.com/searchbytag/`+`${this.state.value}`)
    axios.get(`http://localhost:3001/searchbytag/`+ this.state.value)
      .then( (response) => {

        // Using the _Lodash library to first shuffle the response array,
        // so that returning users have a novel experience
        // response.data.objects = _Lodash.shuffle(response.data.objects)

        console.log(`The search value is:`, this.state.value, `There are`, (response.data.objects).length, `objects BEFORE finessing.`)
        // stop the loading spinner
        this.setState({loading: false});
        // having some fun and chaning the background
        this.shuffleBackgroundClipTextImage()
        this.setState({preSelectedImages: response.data.objects}, () => {
          this.finesseImages( () => {
            // console.log(`There are`, (response.data.objects).length, `objects after finessing.`)
          })
        this.revealFilterResultsComponent()
        })
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // perform a bunch of functions to clean up the arrays
  finesseImages() {
    this.removeBlacklistedImages()
    this.removeSkinnyImages()
    // this.rotatePortraitImages()
    // console.log("finesseImages()")
  }


  // a function to remove preselected bad images
  removeBlacklistedImages() {

    // let preSelectedImagesArray = this.state.preSelectedImages
    // console.log("remove blacklisted items from collection", preSelectedImagesArray)


    // preSelectedImagesArray.forEach( (object) => {
    //   console.log("object.id to check against blacklist:", object.id)

    //   blacklist.forEach( (item) => {

    //     console.log("item.blacklist for: ", item.filterTerm, item.blacklistId)

    //     if (item.blacklistId == object.id) {
    //       console.log("same. kick out!")
    //       _Lodash.remove(preSelectedImagesArray, object)
    //     }
    //   });

    // this.setState({preSelectedImages: preSelectedImagesArray})
    // });
  }



  // // images that are too thin, should be removed
  // removeSkinnyImages() {
  //   // console.log("removing skinny objects")
  //   // let selectedImagesArray = this.state.selectedImages
  //   // // using the _Lodash library to remove skinny items from the
  //   // // array of selected images
  //   // // https://lodash.com/docs/#reject
  //   // selectedImagesArray = _Lodash.reject(selectedImagesArray, (theObject) => { return (theObject.id === item.id); } )
  //   // this.setState({selectedImages: selectedImagesArray } )
  // };


  // ==================================
  // images that are too thin, should be removed
  // note: must focus on rendered image, not reported dims
  // ==================================
  removeSkinnyImages() {
    // let renderedImg = document.querySelector('.result-img');

    // let width = renderedImg.naturalWidth;
    // let height = renderedImg.naturalHeight;

    // console.log(renderedImg, " is being evaluated for skinniness")

    //   if ((renderedImg.naturalHeight > renderedImg.naturalWidth) &&
    //       (renderedImg.naturalHeight / renderedImg.naturalWidth) > 3) {
    //     console.log("This is a skinny PORTRAIT image, REMOVE!!!!!!!!!!")
    //   }
    //   else if ((renderedImg.naturalWidth > renderedImg.naturalHeight) &&
    //            (renderedImg.naturalWidth / renderedImg.naturalHeight) > 3) {
    //     console.log("This is a skinny LANDSCAPE image, REMOVE!!!!!!!!!!!!!!!!")
    //   }

  };

  // ==================================
  // portrait images should be rotated 90 degrees to be Landscape
  // ==================================
  // rotatePortraitImages() {
  //   console.log(objects.title, " is being evaluated for height & length")

  //   if (objects.dimensions_raw.height[0] > this.dimensions_raw.width[0]) {
  //       console.log(this.title, "is a portrait image. It must be rotated")
  //       document.querySelector(".result-img").classList.add("rotate-image");
  //     }

  // };


  revealFilterResultsComponent() {
    this.setState({filterResultsComponent: true})
    document.querySelector("#results-component").style.display = "block";
  };


  revealSelectedImagesComponent() {
    this.setState({selectedImagesComponent: true})
    document.querySelector("#selected-images-component").style.display = "block";
  };



  shuffleBackgroundClipTextImage() {
    let arrayLength = backgroundImages.length - 1
    // console.log(arrayLength)
    let randomNumber = Math.floor(Math.random() * arrayLength);
    let randomImage = backgroundImages[randomNumber];
    // console.log("randomImage is:", randomImage, "randomNumber is:", randomNumber)
    document.querySelector(".clip-text").style.setProperty("background", `url("/images/` + randomImage + `")` )
    document.querySelector("body").style.setProperty("background", `url("/images/` + randomImage + `")` )
    document.querySelector(".clip-text").style.setProperty("color", "#fff;")
    document.querySelector(".clip-text").style.setProperty("-webkit-text-fill-color", "transparent")
    document.querySelector(".clip-text").style.setProperty("-webkit-background-clip", "text")
    // document.querySelector(".header").style.textShadow = "2px 2px 2px #fff";
  }

  componentDidMount() {
    this.shuffleBackgroundClipTextImage()
  }



  render() {
  return (
    <div className="App app-container">
      <Header />
      <Filters handleFilterSubmit={this.handleFilterSubmit}
                  parent_state={this.state}
                  loading={this.state.loading}
                  />
      <Results parentState={this.state}
               preSelectedImages={this.state.preSelectedImages}
               revealFilterResultsPlacehodler={this.revealFilterResultsPlacehodler}
               whichButton={this.whichButton}
               rotatePortraitImages={this.rotatePortraitImages}
               removeSkinnyImages={this.removeSkinnyImages}
               />
      <SelectedImages selectedImages={this.state.selectedImages}
                      revealSelectedImagesComponent={this.state.revealSelectedImagesComponent}
                      />
      <DownloadButton />
      <Instructions />
      <CuratedSetsSection />
      <Footer />
    </div>
  );
}
}

