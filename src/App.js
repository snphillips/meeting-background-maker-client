import React, { useState, useEffect, useRef } from "react";
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
const [displaySearchResults, setDisplaySearchResults] = useState(false);
const [preSelectedImages, setPreSelectedImages] = useState([]); 
const [selectedImagesCollection, setSelectedImagesCollection] = useState([]);
const [imgData, setImgData] = useState();
                  

// ===================================
// Runs on first render
// ===================================
useEffect(() => {
  console.log("starting app from the top!!!!!!")
  shuffleBackgroundClipTextImage();
  // zipDownloadFolderCuratedSet()
  // zipDownloadFolderSelectedImages()
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
          console.log(`🍩 The search value is:`, value, `There are`, (response.data).length, `images.`)
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
    }
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

  // Using the JSZip library
  // https://stuk.github.io/jszip/documentation/examples.html
  function zipDownloadFolderSelectedImages() {
    console.log("downloading selected images: ", selectedImagesCollection);
    let folderName = "meeting-backgrounds";
    let zip = new JSZip();
    // jszip format is: .folder(nameoffolder)
    let imgFolder = zip.folder("meeting-backgrounds");

    // forEach image, generate a console.log and file item
    let folderContent = [];
    selectedImagesCollection.forEach((image) => {
      // sarah, what is imgData supposed to be?
      console.log('image.imgFileLocation:', image.imgFileLocation)
      // {base64: true}
      // Set to true if the data is base64 encoded.
      // For example image data from a <canvas> element. Plain text and HTML do not need this option.
      // Sarah, do I need {base64: true} What does that means?
      // jszip file format is: .file(nameoffile, content-of-file, options)
      // imgFolder.file(image.images[0].b.url, content-of-file, {base64: true});
      // imgFolder.file(image.title, image.imgFileLocation, {base64: true});
      folderContent.push(imgFolder.file(image.id + '.jpg', image.imgFileLocation));
      console.log("folderContent:", folderContent)
    });

    zip.generateAsync({ type: "blob" }).then(function (folderContent) {
      // Using npm library FileSaver.js
      console.log("folderContent:", folderContent, "folderName:", folderName, "folderContent", folderContent)
      // saveAs(folderContent, folderName);
      saveAs(folderContent, folderName);
    });
  }

  // Sarah why did you take this out in 2020?
  // function zipDownloadFolderCuratedSet(value, index) {
    // console.log("downloading curated image set with value of: ", value, index)
    // console.log("this.state.curatedSets[index]", this.state.curatedSets[index])

    // // let desiredCuratedSet = value
    // let selectedCuratedSet = this.state.curatedSets[index].images
    // // value is the name of the selected curated list
    // let folderName = value
    // let zip = new JSZip();
    // // zip.file("Hello.txt", "Hello World\n");
    // // let imgFolder = zip.folder("cocktailHour");
  
    // selectedCuratedSet.forEach( (thing) => {
    //   console.log("curated imgData:", imgData)
    //   zip.file(thing.imageURL, imgData, {base64: true});
    // })
  
    // zip.generateAsync({type:"blob"})
    //    .then(function(content) {
    //       // Using npm library FileSaver.js
    //       saveAs(content, folderName);
    //    });
  // }




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
            selectedImagesCollection={selectedImagesCollection}
            displaySelectedImages={displaySelectedImages}
            displayYourBackgroundsComponent={displayYourBackgroundsComponent}
            displayCuratedSetComponent={displayCuratedSetComponent}
            displaySearchResults={displaySearchResults}
            displayComputerImage={displayComputerImage}
            whichButton={whichButton}
            zipDownloadFolderSelectedImages={zipDownloadFolderSelectedImages}
            userSelectFilterTerm={userSelectFilterTerm}
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
