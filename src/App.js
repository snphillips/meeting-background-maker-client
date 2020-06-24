import React, { Component } from 'react';
import axios from 'axios';
// import Jimp from 'jimp';
// import JSzip from 'jszip';
import { saveAs } from 'file-saver';
import _Lodash from 'lodash';
import Header from './Header';
import Filters from './Filters';
import Results from './Results';
import Instructions from './Instructions';
import CuratedSetsComponent from './CuratedSetsComponent';
import Footer from './Footer';
import blacklistArray from './blacklistArray';
import backgroundImages from './backgroundImages';
import SelectedImages from './SelectedImages';
let JSZip = require("jszip");

// Curated Sets
// let curatedSets = require('./curatedSets.js').default;
let cocktailHour = require('./CuratedSets/cocktailHour.js').default;
let colorTheory = require('./CuratedSets/colorTheory.js').default;
let gardenParty = require('./CuratedSets/gardenParty.js').default;
let gourmet = require('./CuratedSets/gourmet.js').default;
let hermanMillerPicnic = require('./CuratedSets/hermanMillerPicnic.js').default;
let photoMural = require('./CuratedSets/photoMural.js').default;
let wallpaperThatKills = require('./CuratedSets/wallpaperThatKills.js').default;


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // serverSource: 'https://art-thief.herokuapp.com/searchbytag',
      serverSource: 'http://localhost:3001/searchbytag/',
      loading: false, // the loading spinner
      filterResultsComponent: false,
      selectedImagesComponent: false,
      downloadButtonComponent: false,
      downloadSetComponent: true,
      value: 'dots',
      preSelectedImages: [],
      selectedImages: [],
      blacklist: blacklistArray,
      curatedSets: [ cocktailHour, colorTheory, gardenParty, gourmet, hermanMillerPicnic, photoMural, wallpaperThatKills],
      // selectedCuratedSet: ''
    };

    // This binding is necessary to make `this` work in the callback
    // this.handleChange = this.handleChange.bind(this);
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handleAddToCollectionSubmit = this.handleAddToCollectionSubmit.bind(this);
    this.handleRemoveFromCollectionSubmit = this.handleRemoveFromCollectionSubmit.bind(this);
    this.shuffleBackgroundClipTextImage = this.shuffleBackgroundClipTextImage.bind(this);
    this.toggleFilterResultsComponent = this.toggleFilterResultsComponent.bind(this);
    this.toggleSelectedImagesComponent = this.toggleSelectedImagesComponent.bind(this);
    this.whichButton = this.whichButton.bind(this);
    this.zipDownloadFolderCuratedSet = this.zipDownloadFolderCuratedSet.bind(this);
    this.zipDownloadFolderSelectedImages = this.zipDownloadFolderSelectedImages.bind(this);
    this.toggleCuratedSetImages = this.toggleCuratedSetImages.bind(this);
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
    this.revealDownloadButtonComponent()
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
    // using the _Lodash library to efficiently check if the button
    // belongs to an item that the user has selected or not
    // https://lodash.com/docs/#includes
    let buttonResult = ""

    if ( _Lodash.includes(this.state.selectedImages, item) ) {

      // could this be a switch statement?
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
    axios.get(this.state.serverSource + this.state.value)
      .then( (response) => {
        // having some fun and changing the background
        this.shuffleBackgroundClipTextImage()
        // console.log(`The search value is:`, this.state.value, `There are`, (response.data).length, `images.`)
        // console.log(`1) The search value is:`, this.state.value, "response length is:", (response.data).length )
        // set the state of preSelectedImage with the response from the server
        this.setState({preSelectedImages: response.data})
        // this.removeBlacklist()
        // this.rotatePortrait()
        // this.skinnyGottaGo()
        // console.log("4) AFTER Manipulation preSelectedImages are:", this.state.preSelectedImages, this.state.preSelectedImages.length)
        // stop the loading spinner
        this.setState({loading: false});
        // show the component that displays results
        this.setState({filterResultsComponent: true}, () => {
          this.toggleFilterResultsComponent()
        })
      })
      .catch(function (error) {
        console.log(error);
      });

  };


  toggleFilterResultsComponent() {
    console.log("toggle the search results component")
    this.state.filterResultsComponent ? (document.querySelector("#results-component").style.display = "block") : (document.querySelector("#results-component").style.display = "none")
  };

  toggleSelectedImagesComponent() {
    this.setState({selectedImagesComponent: true})
    document.querySelector("#selected-images-component").style.display = "block";
  };

  toggleDownloadButtonComponent() {
    if (this.state.selectedImages.length > 0) {
      this.setState({downloadButtonComponent: true})
      document.querySelector(".download-button").style.display = "block";
    }
  };



  shuffleBackgroundClipTextImage() {
    let arrayLength = backgroundImages.length - 1
    let randomNumber = Math.floor(Math.random() * arrayLength);
    let randomImage = backgroundImages[randomNumber];

    document.querySelector(".clip-text").style.setProperty("background", `url("/images/` + randomImage + `")` )
    document.querySelector("body").style.setProperty("background", `url("/images/` + randomImage + `")` )
    document.querySelector(".clip-text").style.setProperty("color", "#fff;")
    document.querySelector(".clip-text").style.setProperty("-webkit-text-fill-color", "transparent")
    document.querySelector(".clip-text").style.setProperty("-webkit-background-clip", "text")
    // document.querySelector(".header").style.textShadow = "2px 2px 2px #fff";
  }




 zipDownloadFolderCuratedSet(value, index) {
  console.log("downloading curated image set with value of: ", value, index)
  console.log("spongebob", this.state.curatedSets[index])
  // let desiredCuratedSet = value

  let selectedCuratedSet = this.state.curatedSets[index].images

  // value is the name of the selected curated list
  let folderName = value
  let zip = new JSZip();

  selectedCuratedSet.forEach( (thing) => {
    zip.file(thing.imageURL, this.imgData, {base64: true});
  })

  zip.generateAsync({type:"blob"})
  .then(function(content) {
      // Using npm library FileSaver.js
      saveAs(content, folderName);
  });
 }


zipDownloadFolderSelectedImages() {
  console.log("downloading selected images: ", this.state.selectedImages)
  let selectedImages = this.state.selectedImages
  let folderName = 'meeting-backgrounds'
  let zip = new JSZip();
  // zip.file("Hello.txt", "Hello World\n");
  let imgFolder = zip.folder("meeting-backgrounds");

  selectedImages.forEach( (image) => {
    imgFolder.file(image.images[0].b.url, this.imgData, {base64: true});
  })

  zip.generateAsync({type:"blob"})
  .then(function(content) {
      // Using npm library FileSaver.js
      saveAs(content, folderName);
  });
 }


 toggleCuratedSetImages(index){
  console.log("toggle curated set images for: ", index)
  // {this.state.imagesRevealed ? 'Hide details' : 'Show details'}
 }





  componentDidMount() {
    this.shuffleBackgroundClipTextImage()
    // this.zipDownloadFolderCuratedSet()
    // this.zipDownloadFolderSelectedImages()
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
               toggleFilterResultsPlacehodler={this.toggleFilterResultsPlacehodler}
               whichButton={this.whichButton}
               />
      <SelectedImages selectedImages={this.state.selectedImages}
                      toggleSelectedImagesComponent={this.state.toggleSelectedImagesComponent}
                      zipDownloadFolderSelectedImages={this.zipDownloadFolderSelectedImages}
                      />
     <CuratedSetsComponent parentState={this.state}
                           zipDownloadFolderCuratedSet={this.zipDownloadFolderCuratedSet}
                           curatedSets={this.state.curatedSets}
                           toggleCuratedSetImages={this.toggleCuratedSetImages}
                           />
      <Instructions />
      <Footer />
    </div>
  );
}
}

