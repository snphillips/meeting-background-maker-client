import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import _Lodash from "lodash";
import JSZipUtils from "jszip-utils";


import Header from "./components/Header";
import CuratedSetsComponent from "./components/CuratedSetsComponent";
import Footer from "./components/Footer";
import YourBackgroundsComponent from "./components/YourBackgroundsComponent";

// Curated Sets
import cocktailHour from "./CuratedSets/cocktailHour.js";
import colorTheory from "./CuratedSets/colorTheory.js";
import gardenParty from "./CuratedSets/gardenParty.js";
import gourmet from "./CuratedSets/gourmet.js";
import hermanMillerPicnic from "./CuratedSets/hermanMillerPicnic.js";
import photoMural from "./CuratedSets/photoMural.js";
import kolomanMoser from "./CuratedSets/kolomanMoser";

const JSZip = require("jszip");

const curatedSets = [cocktailHour, colorTheory, gardenParty, gourmet, hermanMillerPicnic, photoMural, kolomanMoser];

export default function App(props) {
  
const initialRender = useRef(true);
const [loading, setLoading] = useState(false); // the loading spinner
const [value, setValue] = useState();
const [displayComputerImage, setDisplayComputerImage] = useState(true);
const [displaySelectedImages, setDisplaySelectedImages] = useState(false);
const [displayCuratedSetComponent, setDisplayCuratedSetComponent] = useState(false);
const [displayYourBackgroundsComponent, setDisplayYourBackgroundsComponent] = useState(true);
const [displaySearchResults, setDisplaySearchResults] = useState(false);
const [preSelectedImages, setPreSelectedImages] = useState([]); 
const [selectedImagesCollection, setSelectedImagesCollection] = useState([]);
const [allTags, setAllTags] = useState([]);



// ===================================
// Runs on first render
// ===================================
useEffect(() => {
  console.log("starting app from the top!!!!!!")
  shuffleBackgroundClipTextImage();
  cooperHewittGetTagsFromAPI();
}, []);

function userSelectFilterTerm(event) {
  event.preventDefault();
  console.log("*********** userSelectFilterTerm event", event.target.value)
  setValue(event.target.value);
}
// **************************************

  useEffect(() => {

    // =================================== 
    function searchByTag() {
      // start the loading spinner
      setLoading(true);
      console.log("value is: ", value);
      shuffleBackgroundClipTextImage();
      
      axios
        .get(`http://localhost:3001/searchbytag/` + value)
        .then((response) => {
          // console.log(`🍩 The search value is:`, value, `There are`, (response.data).length, `images.`)
          console.log(`🍩 The search value is:`, value, `response.data:`, response.data)
          // set the state of preSelectedImage with the response from the server
          setPreSelectedImages(response.data)
          // stop the loading spinner
          // show the component that displays the preSelected results from the search
          setLoading(false);
          setDisplaySearchResults(true)
        })
        .catch(function (error) {
          // debugger
          console.log("axios api call catch error:", error );
        });
      }
      // =================================== 
      
      // don't run on initial render

      if (initialRender.current) {
        initialRender.current = false;
      } else {
        searchByTag();
        setDisplayComputerImage(false);
        setDisplaySearchResults(true);
    }
  }, [value]);


  function addToCollection(item){
    setSelectedImagesCollection( array => array.concat(item) );
  }

  useEffect(() => {
    if (selectedImagesCollection.length < 1) {
      setDisplaySelectedImages(false);
    } else {
      setDisplaySelectedImages(true);
      console.log("selectedImagesCollection:", selectedImagesCollection)
    }
    // TODO: update /user-selected-meeting-backgrounds/ (are you even going to use this?)
  }, [selectedImagesCollection])
  
  
  function removeFromCollection(item) {
    console.log("Remove ", item.title, " this item from collection");
    let selectedImagesArray = selectedImagesCollection;
    // using the _Lodash library to remove the item from the
    // array of selected images
    // https://lodash.com/docs/#reject
    selectedImagesArray = _Lodash.reject(selectedImagesArray, (theObject) => {
    // selectedImages = _Lodash.reject(selectedImages, (theObject) => {
      return theObject.id === item.id;
    });
    setSelectedImagesCollection(selectedImagesArray)
  }

  function whichButton(item) {
    // using the _Lodash library to efficiently check if the button
    // belongs to an item that the user has selected or not
    // https://lodash.com/docs/#includes
    let buttonResult = "";

    if (_Lodash.includes(selectedImagesCollection, item)) {
      // could this be a switch statement?
      buttonResult = (
        <button
          // type="submit"
          type="button"
          value={item}
          className="results-button-remove-from-collection"
          onClick={() => {
            // console.log("button value is:", item.title);
            removeFromCollection(item);
          }}
        >
          {" "}
          remove from collection
        </button>
      );
    } else {
      buttonResult = (
        <button
          // type="submit"
          type="button"
          value={item}
          className="results-button-add-to-collection"
          onClick={() => {
            // console.log("button value is:", item, item.id);
            addToCollection(item);
          }}
        >
          {" "}
          add to collection
        </button>
      );
    }
    return buttonResult;
  }

  function shuffleBackgroundClipTextImage() {
    let numOfBackgroundImages = 31;
    let randomNumber = Math.floor(Math.random() * numOfBackgroundImages);
    // console.log("random background image number is: ", randomNumber);
    document
      .querySelector(".clip-text")
      .style.setProperty(
        "background",
        `url("/images/` + randomNumber + `.png")`
      );
    document
      .querySelector("body")
      .style.setProperty(
        "background",
        `url("/images/` + randomNumber + `.png")`
      );

      // We change the background often for fun
      // Sometimes, we change the background and there is no computer screen icon
      // Only change the background of the computer icon, if it's there.
      let compyIcon = document.querySelector("#computer-screen") !== null;
      if (compyIcon) {
        document
          .querySelector("#computer-screen")
          .style.setProperty(
            "background",
            `url("/images/` + randomNumber + `.png")`
          );
      }

    document
      .querySelector(".clip-text")
        .style.setProperty("color", "#fff;");
    document
      .querySelector(".clip-text")
        .style.setProperty("-webkit-text-fill-color", "transparent");
    document
      .querySelector(".clip-text")
        .style.setProperty("-webkit-background-clip", "text");
    // document.querySelector(".header").style.textShadow = "2px 2px 2px #fff";
  }

  // Using the JSZip library & jszip-utils
  // https://stuk.github.io/jszip/documentation/examples.html
  function zipDownloadFolderSelectedImages() {

    /* Create a new instance of JSZip where (describe)*/
    /* we will be adding all of our files*/
    let zip = new JSZip();
    let count = 0;

    selectedImagesCollection.forEach(function (image) {
      let filename = image.id + `.jpg`;
      let url = image.imgFileLocation;

      JSZipUtils.getBinaryContent(url, function (err, data) {
        if (err) {
          throw err; // or handle the error
        }
        zip.file(filename, data, { binary: true });
        count++;
        if (count === selectedImagesCollection.length) {
          zip.generateAsync({ type: 'blob' }).then(function (content) {
            saveAs(content, "meeting-backgrounds");
          });
        }
      });
    }) 
  }

// =====================================
// get tags
// =====================================
function cooperHewittGetTagsFromAPI() {
  console.log("making api call")
  let url = `http://localhost:3001/alltags/`
  
  axios.get(url)
  .then((response) => {
    console.log(`🎈 response.data.tags:`, response.data)
    // set the state of preSelectedImage with the response from the server
    setAllTags(response.data);
    // stop the loading spinner
    // show the component that displays the preSelected results from the search
    // setLoading(false);
    // setDisplaySearchResults(true)
  })
  .catch(function (error) {
    // debugger
    console.log("axios api call catch error:", error );
  });
}







    return (
      <div className="App app-container">
        <Header />

        <section id="section-headers">
          <div className="user-generated-set-div">
            <h2
              className="set-heading user-generated-set-heading"
              onClick={() => {
                setDisplayYourBackgroundsComponent(true);
                document.querySelector(
                  ".user-generated-set-heading"
                ).style.borderBottom = "2px solid #000";
                document.querySelector(
                  ".curated-set-heading"
                ).style.borderBottom = "2px solid #fff";
                document.querySelector(
                  "#user-generated-set-window"
                ).style.display = "block";
                document.querySelector(
                  "#curated-set-window"
                ).style.display = "none";
              }}
            >
              Your Backgrounds  
            </h2>
          </div>

          <div className="curated-set-heading-div">
            <h2
              className="set-heading curated-set-heading"
              onClick={() => {
                setDisplayCuratedSetComponent(true);
                  document.querySelector(".user-generated-set-heading").style.borderBottom = "2px solid #fff";
                  document.querySelector(".curated-set-heading").style.borderBottom = "2px solid #000";
                  document.querySelector("#user-generated-set-window").style.display = "none";
                  document.querySelector("#curated-set-window").style.display =
                    "block";
              }}
            >
              Curated Sets
            </h2>
          </div>
        </section>

        <section id="component-sections">

          <YourBackgroundsComponent
            value={value}
            loading={loading}
            preSelectedImages={preSelectedImages}
            selectedImagesCollection={selectedImagesCollection}
            displaySelectedImages={displaySelectedImages}
            displayYourBackgroundsComponent={displayYourBackgroundsComponent}
            displayCuratedSetComponent={displayCuratedSetComponent}
            displaySearchResults={displaySearchResults}
            displayComputerImage={displayComputerImage}
            whichButton={whichButton}
            zipDownloadFolderSelectedImages={zipDownloadFolderSelectedImages}
            userSelectFilterTerm={userSelectFilterTerm}
            cooperHewittGetTagsFromAPI={cooperHewittGetTagsFromAPI}
            allTags={allTags}
          />

          <CuratedSetsComponent
            curatedSets={curatedSets}
            displayCuratedSetComponent={displayCuratedSetComponent}
            displayYourBackgroundsComponent={displayYourBackgroundsComponent}
          />
        </section>
        <Footer />
      </div>
    );
}
