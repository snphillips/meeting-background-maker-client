import React, { Component } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import _Lodash from 'lodash';
import Header from './Header';
import Instructions from './Instructions';
import CuratedSetsComponent from './CuratedSetsComponent';
import Footer from './Footer';
import removalListArray from './removalListArray';
import UserGeneratedSetComponent from './UserGeneratedSetComponent';

// Curated Sets
import kolomanMoser from './CuratedSets/kolomanMoser';
import cocktailHour from'./CuratedSets/cocktailHour.js';
import colorTheory from'./CuratedSets/colorTheory.js';
import gardenParty from'./CuratedSets/gardenParty.js';
import gourmet from'./CuratedSets/gourmet.js';
import hermanMillerPicnic from'./CuratedSets/hermanMillerPicnic.js';
import photoMural from'./CuratedSets/photoMural.js';

let JSZip = require("jszip");

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, // the loading spinner
      displayUserGeneratedSetComponent: true,
      displayResultsComponent: false,
      displayFilterResults: false,
      displaySelectedImages: false,
      displayDownloadButton: true,
      displayCuratedSetComponent: false,
      downloadSetComponent: true,
      value: 'dots',
      preSelectedImages: [],
      selectedImages: [],
      removalList: removalListArray,
      curatedSets: [ cocktailHour, colorTheory, gardenParty, gourmet, hermanMillerPicnic, photoMural, kolomanMoser],
      // selectedCuratedSet: ''
    };

    // This binding is necessary to make `this` work in the callback
    // this.handleChange = this.handleChange.bind(this);
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handleAddToCollectionSubmit = this.handleAddToCollectionSubmit.bind(this);
    this.handleRemoveFromCollectionSubmit = this.handleRemoveFromCollectionSubmit.bind(this);
    this.shuffleBackgroundClipTextImage = this.shuffleBackgroundClipTextImage.bind(this);
    this.whichButton = this.whichButton.bind(this);
    // this.zipDownloadFolderCuratedSet = this.zipDownloadFolderCuratedSet.bind(this);
    this.zipDownloadFolderSelectedImages = this.zipDownloadFolderSelectedImages.bind(this);
    this.toggleDisplayBlockOrNone = this.toggleDisplayBlockOrNone.bind(this);
  }

// ***********************************
// End of constructor
// ***********************************

  handleFilterSubmit(event) {
    this.setState({value: event.target.value}, () => {
      this.searchByTag()
    });
    event.preventDefault();
  }

  handleAddToCollectionSubmit(item) {
    console.log("add to collection")
    let selectedImageArray = this.state.selectedImages
    selectedImageArray.push(item)
    this.setState({selectedImages: selectedImageArray } )
    this.toggleDownloadButtonComponent()

    this.setState({displaySelectedImages: true}, () => {
      this.toggleDisplayBlockOrNone(this.state.displaySelectedImages, "#selected-images-component")
    })
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
    axios.get(`http://localhost:3001/searchbytag/`+ this.state.value)
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
        this.revealFilterResultsComponent()
      })
      .catch(function (error) {
        console.log(error);
      });

  };










  searchByTag() {
    // start the loading spinner
    this.setState({loading: true})
    console.log("this.state.value is: ", this.state.value)
    this.shuffleBackgroundClipTextImage()

     axios.get(`http://localhost:3001/searchbytag/`+ this.state.value)
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

      // show the component that displays the preSelected results from the search
      this.setState({displayFilterResults: true}, () => {
        this.toggleDisplayBlockOrNone(this.state.displayFilterResults, "#results-component")
      })


    })
    .catch(function (error) {
      console.log(error);
    });

 }








  // Reusable toggle function-- toggle betwewen display block or none
  // If toggleState is true, then display block. If false, display none.
  // This function is being used in displayFilterResults, displaySelectedImages &
  // displayDownloadButton
  toggleDisplayBlockOrNone(toggleState, htmlSelector) {
    console.log("toggleState: ", toggleState, htmlSelector)
    toggleState ? (document.querySelector(htmlSelector).style.display = "block") : (document.querySelector(htmlSelector).style.display = "none")
  };



  toggleDownloadButtonComponent() {
    if (this.state.selectedImages.length > 0) {
      this.setState({displayDownloadButton: true})
      document.querySelector(".download-button").style.display = "block";
    }
  };


  shuffleBackgroundClipTextImage() {
    let numOfBackgroundImages = 31
    let randomNumber = Math.floor(Math.random() * numOfBackgroundImages);
    console.log("random background image number is: ", randomNumber)
    document.querySelector(".clip-text").style.setProperty("background", `url("/images/` + randomNumber + `.png")` )
    document.querySelector("body").style.setProperty("background", `url("/images/` + randomNumber + `.png")` )
    document.querySelector(".clip-text").style.setProperty("color", "#fff;")
    document.querySelector(".clip-text").style.setProperty("-webkit-text-fill-color", "transparent")
    document.querySelector(".clip-text").style.setProperty("-webkit-background-clip", "text")
    // document.querySelector(".header").style.textShadow = "2px 2px 2px #fff";
  }



  // Using the JSZip library
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





  componentDidMount() {
    this.shuffleBackgroundClipTextImage()
    // this.zipDownloadFolderCuratedSet()
    // this.zipDownloadFolderSelectedImages()
  }



  render() {
  return (
    <div className="App app-container">
      <Header />

      <section id="section-headers">

          <div className="user-generated-set-div">
            <h2 className="set-heading user-generated-set-heading"
                onClick={ () => {
                  this.setState({displayUserGeneratedSetComponent: true}, () => {
                    document.querySelector(".user-generated-set-heading").style.borderBottom = "2px solid #000"
                    document.querySelector(".curated-set-heading").style.borderBottom = "2px solid #fff"
                    document.querySelector("#user-generated-set-window").style.display = "block"
                    document.querySelector("#curated-set-window").style.display = "none"
                  })
                }}>
                Your Backgrounds
            </h2>
          </div>


          <div className="curated-set-heading-div">
            <h2 className="set-heading curated-set-heading"
                onClick={ () => {
                  this.setState({displayCuratedSetComponent: true}, () => {
                    document.querySelector(".user-generated-set-heading").style.borderBottom = "2px solid #fff"
                    document.querySelector(".curated-set-heading").style.borderBottom = "2px solid #000"
                    document.querySelector("#user-generated-set-window").style.display = "none"
                    document.querySelector("#curated-set-window").style.display = "block"
                  })
                }}>
                Curated Sets
            </h2>
          </div>

      </section>

      <section id="component-sections">


        <UserGeneratedSetComponent parentState={this.state}
                                   handleFilterSubmit={this.handleFilterSubmit}
                                   loading={this.state.loading}
                                   preSelectedImages={this.state.preSelectedImages}
                                   toggleFilterResultsPlacehodler={this.toggleFilterResultsPlacehodler}
                                   whichButton={this.whichButton}
                                   selectedImages={this.state.selectedImages}
                                   toggleSelectedImagesComponent={this.state.toggleSelectedImagesComponent}
                                   zipDownloadFolderSelectedImages={this.zipDownloadFolderSelectedImages}
                                   toggleDisplayBlockOrNone={this.toggleDisplayBlockOrNone}
                                   displayUserGeneratedSetComponent={this.state.displayUserGeneratedSetComponent}
                                   displayCuratedSetComponent={this.state.displayCuratedSetComponent}
                                   displayResultsComponent={this.state.displayResultsComponent}
                                   />

         <CuratedSetsComponent parentState={this.state}
                               zipDownloadFolderCuratedSet={this.zipDownloadFolderCuratedSet}
                               curatedSets={this.state.curatedSets}
                               displayCuratedSetComponent={this.state.displayCuratedSetComponent}
                               displayUserGeneratedSetComponent={this.state.displayUserGeneratedSetComponent}
                               toggleDisplayBlockOrNone={this.toggleDisplayBlockOrNone}
                               />

      </section>
      <Footer />

    </div>
  );
}
}

