import React, { Component } from 'react';
import axios from 'axios';
import _Lodash from 'lodash';
import Header from './Header';
// import Filters from './Filters';
import FiltersNew from './FiltersNew';
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
      filterResultsPlaceholder: true,
      selectedImagesPlaceholder: true,
      downloadSetPlaceholder: true,
      value: 'smoking',
      preSelectedImages: [],
      selectedImages: [],

    };

    // This binding is necessary to make `this` work in the callback
    // this.handleChange = this.handleChange.bind(this);
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handleAddToCollectionSubmit = this.handleAddToCollectionSubmit.bind(this);
    this.finesseImages = this.finesseImages.bind(this);
    this.removeBlacklistedImages = this.removeBlacklistedImages.bind(this);
    this.removeSkinnyImages = this.removeSkinnyImages.bind(this);
    this.rotatePortraitImages = this.rotatePortraitImages.bind(this);
    this.shuffleBackgroundClipTextImage = this.shuffleBackgroundClipTextImage.bind(this);
    this.hideFilterResultsPlaceholder = this.hideFilterResultsPlaceholder.bind(this);
    this.hideSelectedImagesPlaceholder = this.hideSelectedImagesPlaceholder.bind(this);
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
    this.state.selectedImages.push(item)

    // console.log("event.target.value",item)
    // console.log("this.state.selectedImages", this.state.selectedImages)

    // event.preventDefault();
    this.hideSelectedImagesPlaceholder()
    // Is the best way to force a rerender?
    this.forceUpdate();
  };


  whichButton(item) {
    console.log("pineapple whichButton()", item)
    console.log("pineapple this.selectedImages", this.state.selectedImages)

    // using _Lodash to really quickly check to see if the button
    // belongs to an item that the user has selected or not
    // https://lodash.com/docs/#includes
    if ( _Lodash.includes(this.state.selectedImages, item) ) {
      return "in collection"
    } else {
      return "add to collection"
    }
  }




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
            console.log(`There are`, (response.data.objects).length, `objects after finessing.`)
          })
        this.hideFilterResultsPlaceholder()
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
    this.rotatePortraitImages()
    console.log("finesseImages()")
  }


  // a function to remove preselected bad images
  removeBlacklistedImages() {


    // let imageArray = this.state.preSelectedImages

    // function compare(imageArray, blacklist){
    //   // let filteredImageArray = [];

    //   imageArray.forEach( (item) => {

    //     console.log("item id:", item.id)

    //     blacklist.forEach( (blacklistItem) => {

    //       if (item.id === blacklistItem) {
    //         console.log("items are the same. Pop it out.")
    //         imageArray.pop()
    //         console.log("imageArray.length", this.imageArray.length)

    //       } else {
    //         console.log("Image not in reject list. Image passes.")
    //       }
    //     })
    //   })
    //   return imageArray;
    // }

    // console.log("removeBlacklistedImages()")
    // compare()
  }

  // images that are too thin, should be removed
  removeSkinnyImages() {
    console.log("removeSkinnyImages()")
    let imageArray = this.state.preSelectedImages

    imageArray.map(item => {
      // console.log("item dims are:", item.dimensions_raw)
      // if ( item[0] ) {
      //   imageArray.pop
      })
  };

  // portrait images should be rotated 90 degrees to be Landscape
  rotatePortraitImages() {
    console.log("rotatePortraitImages()")
  };




  hideFilterResultsPlaceholder() {
    if (this.state.filterResultsPlaceholder === true ) {
      console.log("placeholder display none")
      this.setState({filterResultsPlaceholder: false})
      document.querySelector(".results-placeholder").style.display = "none";
    }
  };


  hideSelectedImagesPlaceholder() {
    if (this.state.selectedImagesPlaceholder === true ) {
      this.setState({selectedImagesPlaceholder: false})
      console.log("placeholder display none")
      document.querySelector(".selected-images-placeholder").style.display = "none";
    }
  };

  updateSelectedImages() {
    console.log("updateSelectedImages()")
  }







  shuffleBackgroundClipTextImage() {
    let arrayLength = backgroundImages.length - 1
    console.log(arrayLength)
    let randomNumber = Math.floor(Math.random() * arrayLength);
    let randomImage = backgroundImages[randomNumber];
    console.log("randomImage is:", randomImage, "randomNumber is:", randomNumber)
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
      <FiltersNew handleFilterSubmit={this.handleFilterSubmit}
                  parent_state={this.state}
                  loading={this.state.loading}
                  />
      <Results parentState={this.state}
               preSelectedImages={this.state.preSelectedImages}
               handleAddToCollectionSubmit={this.handleAddToCollectionSubmit}
               hideFilterResultsPlacehodler={this.hideFilterResultsPlacehodler}
               whichButton={this.whichButton}
               />
      <SelectedImages selectedImages={this.state.selectedImages}
                      hideSelectedImagesPlaceholder={this.state.hideSelectedImagesPlaceholder}
                      />
      <DownloadButton />
      <Instructions />
      <CuratedSetsSection />
      <Footer />
    </div>
  );
}
}

