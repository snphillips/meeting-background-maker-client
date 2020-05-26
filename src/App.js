import React, { Component } from 'react';
import axios from 'axios';
import _Lodash from 'lodash';
import Filters from './Filters';
import Collection from './Collection';
import Results from './Results';
import Download from './Download';
import Instructions from './Instructions';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false, // the loading spinner
      // serverSource: 'https://art-thief.herokuapp.com/searchbytag',
      // serverSource: 'http://localhost:3000/searchbytag',
      value: 'candy',
      preSelectedImages: [],
      selectedImages: [],
      imageURL: ""

    };

    // This binding is necessary to make `this` work in the callback
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
    this.handleDropdownSubmit = this.handleDropdownSubmit.bind(this);
  }

// ***********************************
// End of constructor
// ***********************************

 //  ==================================
 //  dropdown menu. First they choose
 //  a value/search tag in the Change event,
 //  then submit that value.
 //  ==================================
  handleDropdownChange(event) {
    this.setState({value: event.target.value});
  }

  handleDropdownSubmit(event) {
    this.setState({displayArtResultInfo: {"display": "none"}})
    this.setState({displayIntroMessage: {"display": "none"}})
    this.cooperHewittSearchByTagFromAPI()
    event.preventDefault();
    console.log("this.state.value is:", this.state.value)
  }




  cooperHewittSearchByTagFromAPI() {
    // this.setState({loading: true})

    // ${this.state.value} is whatever keyword the user chooses from the dropdown menu
    // The "response" does the following:
    // 1) stops the loading spinner
    // 2) removes the placeholder image
    // 3) returns a random item (image, title, description & link url)
    // axios.get(`https://art-thief.herokuapp.com/searchbytag/`+`${this.state.value}`)
    axios.get(`http://localhost:3001/searchbytag/`+`${this.state.value}`)
      .then( (response) => {

        // Using the _Lodash library to first shuffle the response array,
        // in order to pluck the first item from the response array.
        response.data.objects = _Lodash.shuffle(response.data.objects)

        console.log(`The search value is:`, this.state.value, `and there are`, (response.data.objects).length, `objects.`)

        // this.setState({loading: false});
        // this.setState({displayPlaceholderImage: {"display": "none"}})
        this.setState({displayArtResultImage: {"display": "block"}})
        this.setState({imageURL: response.data.objects[0].images[0].z.url})
        // this.setState({itemTitle: response.data.objects[0].title})
        // this.setState({itemMedium: response.data.objects[0].medium})
        // this.setState({itemInfo: response.data.objects[0].label_text})
        // this.setState({learnMoreURL: response.data.objects[0].url})
        // this.setState({displayArtResultInfo: {"display": "block"}})
        this.setState({preSelectedImages: response.data.objects})
      })
      .catch(function (error) {
        console.log(error);
      });
  };









  render() {
  return (
    <div className="App">
      <h1 className="header">meeting background maker</h1>
      <Filters handleDropdownChange={this.handleDropdownChange}
               handleDropdownSubmit={this.handleDropdownSubmit}
               parent_state={this.state}
               />
      <Results parentState={this.state}
               preSelectedImages={this.state.preSelectedImages}
               />
      <Collection />
      <Download />
      <Instructions />
    </div>
  );
}
}
