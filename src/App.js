import React, { Component } from 'react';
import axios from 'axios';
import Jimp from 'jimp';
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

// Curated Sets
// let curatedSets = require('./curatedSets.js').default;
let cocktailHour = require('./CuratedSets/cocktailHour.js').default;
let gardenParty = require('./CuratedSets/gardenParty.js').default;
let hermanMillarPicnic = require('./CuratedSets/hermanMillarPicnic.js').default;
let photoMural = require('./CuratedSets/photoMural.js').default;
let wallpaperThatKills = require('./CuratedSets/wallpaperThatKills.js').default;


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // serverSource: 'https://art-thief.herokuapp.com/searchbytag',
      // serverSource: 'http://localhost:3000/searchbytag',
      loading: false, // the loading spinner
      filterResultsComponent: false,
      selectedImagesComponent: false,
      downloadButtonComponent: false,
      downloadSetComponent: true,
      value: 'dots',
      preSelectedImages: [],
      selectedImages: [],
      blacklist: blacklistArray,
      curatedSets: [ cocktailHour, gardenParty, hermanMillarPicnic, photoMural, wallpaperThatKills]
    };

    // This binding is necessary to make `this` work in the callback
    // this.handleChange = this.handleChange.bind(this);
    this.handleFilterSubmit = this.handleFilterSubmit.bind(this);
    this.handleAddToCollectionSubmit = this.handleAddToCollectionSubmit.bind(this);
    this.handleRemoveFromCollectionSubmit = this.handleRemoveFromCollectionSubmit.bind(this);
    this.shuffleBackgroundClipTextImage = this.shuffleBackgroundClipTextImage.bind(this);
    this.revealFilterResultsComponent = this.revealFilterResultsComponent.bind(this);
    this.revealSelectedImagesComponent = this.revealSelectedImagesComponent.bind(this);
    this.whichButton = this.whichButton.bind(this);
    // this.rotatePortrait = this.rotatePortrait.bind(this);
    // this.skinnyGottaGo = this.skinnyGottaGo.bind(this);
    this.removeBlacklist = this.removeBlacklist.bind(this);

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
        // having some fun and changing the background
        this.shuffleBackgroundClipTextImage()
        // console.log(`The search value is:`, this.state.value, `There are`, (response.data).length, `images.`)
        console.log(`1) The search value is:`, this.state.value, "response length is:", (response.data).length )
        // set the state of preSelectedImage with the response from the server
        this.setState({preSelectedImages: response.data})
        this.removeBlacklist()
        // this.rotatePortrait()
        this.skinnyGottaGo()
        console.log("4) AFTER Manipulation preSelectedImages are:", this.state.preSelectedImages, this.state.preSelectedImages.length)
        // stop the loading spinner
        this.setState({loading: false});
        // show the component that displays results
        this.revealFilterResultsComponent()
      })
      .catch(function (error) {
        console.log(error);
      });

  };


removeBlacklist(blacklistArray) {

  // console.log("snake jazz", this.state.blacklist)

  let preSelectedImages = this.state.preSelectedImages

  preSelectedImages.forEach( (item) => {

    // let blacklist = ["1108749941", "1108749939", "1108749913", "18805771", "18388543", "18711607", "69155057", "1159162409", "18639863", '554917247', '874387565']

    this.state.blacklist.forEach( (blacklistItem) => {

      if (item.id === blacklistItem) {
        console.log("Item matches blacklist. Kick it out.", item.id, "!===",blacklistItem)

        let newArray = _Lodash.without(this.state.preSelectedImages, item)
        this.setState({preSelectedImages: newArray}, () => {
          // console.log("AFTER removeBlacklist() preSelectedImages are:", this.state.preSelectedImages, this.state.preSelectedImages.length)
        })
      } else  {
        // console.log("Does not match blacklist.", item.id, "!===", blacklistItem)
      }
    })
  })
}



rotatePortrait() {
  let preSelectedImages = this.state.preSelectedImages
  // console.log("rotatePortrait() preSelectedImages are:", preSelectedImages, preSelectedImages.length)

  preSelectedImages.forEach( (item) => {

     let imageUrl = item.images[0].b.url

      Jimp.read(imageUrl)

      .then( (meetingBackground) => {
        let width = meetingBackground.bitmap.width
        let height = meetingBackground.bitmap.height
        // console.log("jimp meetingBackground item: ", meetingBackground)
        // console.log("2)", item.id, "width: ", width, "height: ", height)


        if (height > width) {
          console.log("2)", item.id, "PORTRAIT image, ROTATE 90 degrees.")
          // return meetingBackground
          // .rotate( 90 )
          // .write("../meeting-background-maker-client/public/meeting-backgrounds/jimp-rotate.jpg")
        }
        else if (width > height) {
          console.log("2)", item.id, "landscape image. Leave as is.")
        } else {
          console.log("2)", item.id, "square image. Leave as is.")
        }
    })
  })
}



skinnyGottaGo() {
  let preSelectedImages = this.state.preSelectedImages
  console.log("3) BEFORE skinnyGottaGo() preSelectedImages are:", preSelectedImages, preSelectedImages.length)
  preSelectedImages.forEach( (item) => {

     let imageUrl = item.images[0].b.url

    Jimp.read(imageUrl, (err, meetingBackground) => {
      if (err) throw err;

      let width = meetingBackground.bitmap.width
      let height = meetingBackground.bitmap.height


      if ( (height > width) && ((height / width) > 2) ) {
        console.log("4)", item.id, "SKINNY PORTRAIT, REMOVE!")
        let newArray = _Lodash.without(this.state.preSelectedImages, item)
        this.setState({preSelectedImages: newArray}, () => {
          console.log("5) AFTER skinnyGottaGo() preSelectedImages are:", this.state.preSelectedImages, this.state.preSelectedImages.length)
        })
      }
      else if ( (width > height) && ((width / height) > 2) ) {
        console.log("4)", item.id, "SKINNY LANDSCAPE, REMOVE!")
        let newArray = _Lodash.without(this.state.preSelectedImages, item)
        this.setState({preSelectedImages: newArray}, () => {
          console.log("5) AFTER skinnyGottaGo() preSelectedImages are:", this.state.preSelectedImages, this.state.preSelectedImages.length)
        })
      }
      else {
        console.log("4)", item.id, "Not skinny. It can stay.")
      }
    })
  })

}


  revealFilterResultsComponent() {
    console.log("revealing the search results component")
    this.setState({filterResultsComponent: true})
    document.querySelector("#results-component").style.display = "block";
  };

  revealSelectedImagesComponent() {
    this.setState({selectedImagesComponent: true})
    document.querySelector("#selected-images-component").style.display = "block";
  };

  revealDownloadButtonComponent() {
    if (this.state.selectedImages.length > 0) {
      this.setState({downloadButtonComponent: true})
      document.querySelector(".download-button").style.display = "block";
    }
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
               // rotatePortraitImages={this.rotatePortraitImages}
               // removeSkinnyImages={this.removeSkinnyImages}
               />
      <SelectedImages selectedImages={this.state.selectedImages}
                      revealSelectedImagesComponent={this.state.revealSelectedImagesComponent}
                      />
     <CuratedSetsComponent parentState={this.state}
                           curatedSets={this.state.curatedSets}
                           />
      <Instructions />
      <Footer />
    </div>
  );
}
}

                            // cocktailHour={this.props.cocktailHour}
                            // gardenParty={this.props.gardenParty}
                            // hermanMillarPicnic={this.props.hermanMillarPicnic}
                            // photoMural={this.props.photoMural}
                            // wallpaperThatKills={this.props.wallpaperThatKills}
      // <DownloadButton />
