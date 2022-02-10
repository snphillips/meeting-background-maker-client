import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import _Lodash from "lodash";
import Header from "./components/Header";
// import Instructions from "./components/Instructions";
import CuratedSetsComponent from "./components/CuratedSetsComponent";
import Footer from "./components/Footer";
// import removalListArray from "./removalListArray";
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
const [value, setValue] = useState("dots");
const [displayComputerImage, setDisplayComputerImage] = useState(true);
const [displaySelectedImages, setDisplaySelectedImages] = useState(false);
const [displayCuratedSetComponent, setDisplayCuratedSetComponent] = useState(false);
const [displayYourBackgroundsComponent, setDisplayYourBackgroundsComponent] = useState(true);
const [toggleFilterResultsPlaceholder, setToggleFilterResultsPlaceholder] = useState(false);
const [displayFilteredResults, setDisplayFilteredResults] = useState(false);
const [displayDownloadButton, setDisplayDownloadButton] = useState(true);
const [downloadSetComponent, setDownloadSetComponent] = useState(true);
const [preSelectedImages, setPreSelectedImages] = useState([]); 
const [selectedImages, setSelectedImages] = useState([]);
// const [removalList, setRemovalList] = useState([]); 
// const [removalListArray, setRemovalListArray] = useState([]);
const [imgData, setImgData] = useState();
                  

// ===================================
// Runs on first render
// ===================================
useEffect(() => {
  // debugger
  console.log("starting app from the top!!!!!!")
  shuffleBackgroundClipTextImage();
  // zipDownloadFolderCuratedSet()
  // zipDownloadFolderSelectedImages()
}, []);

// **************************************
function handleSubmit(e){
  e.preventDefault();
  console.log("@@@@@@@@ preventDefault")
  // debugger
  // setValue(event.target.value)
};

function userSelectFilterTerm(e){
  e.preventDefault();
  console.log("*********** event", e)
  // debugger
  setValue(e.target.value)
};
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
          // having some fun and changing the background
          // shuffleBackgroundClipTextImage();
          console.log(`The search value is:`, value, `There are`, (response.data).length, `images.`)
          console.log(`1) The search value is:`, value, "response length is:", (response.data).length )
          // set the state of preSelectedImage with the response from the server
          setPreSelectedImages(response.data)
          // stop the loading spinner
          // show the component that displays the preSelected results from the search
          setLoading(false);
          setDisplayFilteredResults(true)
        }).catch(function (error) {
          console.log("api call catch error:", error );
        });
      }
   // =================================== 

    // don't run on initial render
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      searchByTag();
      setDisplayComputerImage(false);
      setDisplayFilteredResults(true);
      // debugger
    }
  }, [value]);



  function handleAddToCollectionSubmit(item) {
    console.log("add to collection");
    let selectedImageArray = selectedImages;
    selectedImageArray.push(item);
    setSelectedImages(selectedImageArray);
    toggleDownloadButtonComponent();
  }

    useEffect(() => {
    // don't run if there are no selected images
    if (selectedImages.length === 0) {
      return
    } else {
      setDisplaySelectedImages(true);
    } 
    }, [selectedImages])


  function handleRemoveFromCollectionSubmit(item) {
    console.log("removing this item from collection: ", item.title);
    let selectedImagesArray = selectedImages;
    // using the _Lodash library to remove the item from the
    // array of selected images
    // https://lodash.com/docs/#reject
    selectedImagesArray = _Lodash.reject(selectedImagesArray, (theObject) => {
      return theObject.id === item.id;
    });
    setSelectedImages(selectedImagesArray)
  }

  function whichButton(item) {
    // using the _Lodash library to efficiently check if the button
    // belongs to an item that the user has selected or not
    // https://lodash.com/docs/#includes
    let buttonResult = "";

    if (_Lodash.includes(selectedImages, item)) {
      // could this be a switch statement?
      buttonResult = (
        <button
          type="submit"
          value={item}
          className="results-button-remove-from-collection"
          onClick={(event) => {
            console.log("button value is:", item, item.id);
            handleRemoveFromCollectionSubmit(item);
          }}
        >
          {" "}
          remove from collection
        </button>
      );
    } else {
      buttonResult = (
        <button
          type="submit"
          value={item}
          className="results-button-add-to-collection"
          onClick={(event) => {
            console.log("button value is:", item, item.id);
            handleAddToCollectionSubmit(item);
          }}
        >
          {" "}
          add to collection
        </button>
      );
    }
    return buttonResult;
  }

  // function cooperHewittSearchByTagFromAPI() {
  //   // start the loading spinner
  //   setLoading(true);

  //   // ${value} is whatever keyword the user chooses from the dropdown menu
  //   // The "response" does the following:
  //   // 1) stops the loading spinner
  //   // 2) removes the placeholder image
  //   // 3) returns a random item (image, title, description & link url)
  //   // axios.get(`https://art-thief.herokuapp.com/searchbytag/`+`${value}`)
  //   axios
  //     .get(`http://localhost:3001/searchbytag/` + value)
  //     .then((response) => {
  //       // having some fun and changing the background
  //       shuffleBackgroundClipTextImage();
  //       // console.log(`The search value is:`, value, `There are`, (response.data).length, `images.`)
  //       // console.log(`1) The search value is:`, value, "response length is:", (response.data).length )
  //       // set the state of preSelectedImage with the response from the server
          // setPreSelectedImages(response.data)
  //       // removeBlacklist()
  //       // rotatePortrait()
  //       // skinnyGottaGo()
  //       // console.log("4) AFTER Manipulation preSelectedImages are:", preSelectedImages, preSelectedImages.length)
  //       // stop the loading spinner
  //       setLoading(false);
  //       // show the component that displays results
  //       setDisplayFilteredResults(true);
  //     })
  //     .catch(function (error) {
  //       console.log("error", error);
  //     });
  // }



  function toggleDownloadButtonComponent() {
    if (selectedImages.length > 0) {
      setDisplayDownloadButton(true);
      document.querySelector(".download-button").style.display = "block";
    }
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
      document
      .querySelector("#computer-screen")
      .style.setProperty(
        "background",
        `url("/images/` + randomNumber + `.png")`
      );
    document.querySelector(".clip-text").style.setProperty("color", "#fff;");
    document
      .querySelector(".clip-text")
      .style.setProperty("-webkit-text-fill-color", "transparent");
    document
      .querySelector(".clip-text")
      .style.setProperty("-webkit-background-clip", "text");
    // document.querySelector(".header").style.textShadow = "2px 2px 2px #fff";
  }

  // Using the JSZip library
  function zipDownloadFolderSelectedImages() {
    console.log("downloading selected images: ", selectedImages);
    // let selectedImages = selectedImages;
    let folderName = "meeting-backgrounds";
    let zip = new JSZip();
    // zip.file("Hello.txt", "Hello World\n");
    let imgFolder = zip.folder("meeting-backgrounds");

    selectedImages.forEach((image) => {
      imgFolder.file(image.images[0].b.url, imgData, { base64: true });
    });

    zip.generateAsync({ type: "blob" }).then(function (content) {
      // Using npm library FileSaver.js
      saveAs(content, folderName);
    });
  }

  // Sarah why did you take this out in 2020?
  function zipDownloadFolderCuratedSet(value, index) {
    console.log("downloading curated image set with value of: ", value, index)
    console.log("spongebob", this.state.curatedSets[index])

    // let desiredCuratedSet = value
    let selectedCuratedSet = this.state.curatedSets[index].images
    // value is the name of the selected curated list
    let folderName = value
    let zip = new JSZip();
    // zip.file("Hello.txt", "Hello World\n");
    // let imgFolder = zip.folder("cocktailHour");
  
    selectedCuratedSet.forEach( (thing) => {
      zip.file(thing.imageURL, this.imgData, {base64: true});
    })
  
    zip.generateAsync({type:"blob"})
       .then(function(content) {
          // Using npm library FileSaver.js
          saveAs(content, folderName);
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
            loading={loading}
            preSelectedImages={preSelectedImages}
            toggleFilterResultsPlaceholder={toggleFilterResultsPlaceholder}
            selectedImages={selectedImages}
            displaySelectedImages={displaySelectedImages}
            displayYourBackgroundsComponent={displayYourBackgroundsComponent}
            displayCuratedSetComponent={displayCuratedSetComponent}
            displayFilteredResults={displayFilteredResults}
            displayComputerImage={displayComputerImage}
            handleSubmit={handleSubmit}
            whichButton={whichButton}
            zipDownloadFolderSelectedImages={zipDownloadFolderSelectedImages}
            userSelectFilterTerm={userSelectFilterTerm}
          />

          <CuratedSetsComponent
            curatedSets={curatedSets}
            displayCuratedSetComponent={displayCuratedSetComponent}
            displayYourBackgroundsComponent={displayYourBackgroundsComponent}
            zipDownloadFolderCuratedSet={zipDownloadFolderCuratedSet}
          />
        </section>
        <Footer />
      </div>
    );
}
