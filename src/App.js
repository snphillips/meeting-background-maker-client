import React, { Component } from 'react';
import axios from 'axios';
// import _Lodash from 'lodash';
import Header from './Header';
import Filters from './Filters';
import Collection from './Collection';
import Results from './Results';
import Download from './Download';
import Instructions from './Instructions';
import CuratedSetsSection from './CuratedSetsSection';
import Footer from './Footer';
import blacklist from './blacklist';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // serverSource: 'https://art-thief.herokuapp.com/searchbytag',
      // serverSource: 'http://localhost:3000/searchbytag',
      loading: false, // the loading spinner
      value: 'sidewall',
      preSelectedImages: [],
      selectedImages: [],
      // curatedSets: [],
      // imageURL: "",

    };

    // This binding is necessary to make `this` work in the callback
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownSubmit = this.handleDropdownSubmit.bind(this);
    this.finesseImages = this.finesseImages.bind(this);
    this.removeBlacklistedImages = this.removeBlacklistedImages.bind(this);
    this.removeSkinnyImages = this.removeSkinnyImages.bind(this);
    this.rotatePortraitImages = this.rotatePortraitImages.bind(this);
  }

// ***********************************
// End of constructor
// ***********************************

 //  ==================================
 //  dropdown menu. First the user chooses
 //  a value/search tag in the Change event,
 //  then they Submit that value.
 //  ==================================
  handleDropdownChange(event) {
    this.setState({value: event.target.value});
  }

  handleDropdownSubmit(event) {
    this.cooperHewittSearchByTagFromAPI()
    event.preventDefault();
    console.log("this.state.value is:", this.state.value)
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
    axios.get(`http://localhost:3001/searchbytag/`+`${this.state.value}`)
      .then( (response) => {

        // Using the _Lodash library to first shuffle the response array,
        // so that returning users have a novel experience
        // response.data.objects = _Lodash.shuffle(response.data.objects)

        console.log(`The search value is:`, this.state.value, `There are`, (response.data.objects).length, `objects BEFORE finessing.`)
        // stop the loading spinner
        this.setState({loading: false});
        this.setState({preSelectedImages: response.data.objects}, () => {
          this.finesseImages( () => {
            console.log(`There are`, (response.data.objects).length, `objects after finessing.`)
          })
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


    let imageArray = this.state.preSelectedImages

    function compare(imageArray, blacklist){
      // let filteredImageArray = [];

      imageArray.forEach( (item) => {

        console.log("item id:", item.id)

        blacklist.forEach( (blacklistItem) => {

          if (item.id === blacklistItem) {
            console.log("items are the same. Pop it out.")
            imageArray.pop()
            console.log("imageArray.length", this.imageArray.length)

          } else {
            console.log("Image not in reject list. Image passes.")
          }
        })
      })
      return imageArray;
    }

    console.log("removeBlacklistedImages()")
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


  }

  // portrait images should be rotated 90 degrees to be Landscape
  rotatePortraitImages() {
    console.log("rotatePortraitImages()")
  }















  render() {
  return (
    <div className="App">
      <Header />
      <Filters handleDropdownChange={this.handleDropdownChange}
               handleDropdownSubmit={this.handleDropdownSubmit}
               parent_state={this.state}
               loading={this.state.loading}
               />
      <Results parentState={this.state}
               preSelectedImages={this.state.preSelectedImages}
               />
      <Collection selectedImages={this.state.selectedImages}/>
      <Download />
      <Instructions />
      <CuratedSetsSection />
      <Footer />
    </div>
  );
}
}
