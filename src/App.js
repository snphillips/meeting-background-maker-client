import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import _reject from 'lodash/reject';
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
  const [activeButton, setActiveButton] = useState('button-id');

  // let serverURL = `http://localhost:3001/` 
  let serverURL = `https://meeting-background-server.herokuapp.com/`


// ===================================
// Runs on first render
// ===================================
useEffect(() => {
  shuffleBackgroundClipTextImage();
}, []);

function userSelectFilterTerm(event) {
  event.preventDefault();
  console.log("userSelectFilterTerm:", event.target.value)
  setValue(event.target.value);
  // The "active" filter button gets an inverted style
  // We pass activeButton state to FilterButtons
  setActiveButton(event.target.value);
}

  useEffect(() => {

    function searchByTag() {

      // start the loading spinner
      setLoading(true);
      console.log("value is: ", value);
      shuffleBackgroundClipTextImage();

      const sendGetRequest = async () => {
        try {
          const response = await axios.get(serverURL + `searchbytag/` + value);
          console.log(`🍩 The search value is:`, value, `response.data:`, response.data)
          console.log(response.data.map((item) => {
            return item.id
          }))
          
          setPreSelectedImages(response.data)
          // stop the loading spinner
          // show the component that displays the preSelected results from the search
          setLoading(false);
          setDisplaySearchResults(true)
        } catch (error) {
          console.log("axios api call catch error:", error );
        }
    };
    sendGetRequest()
      
      }
       
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
    if (selectedImagesCollection.length >= 20) {
      console.log("Collection is full. Return.", selectedImagesCollection.length)
      alert("Collection full. Remove an image before adding another.")
      return;
    }
    setSelectedImagesCollection( array => array.concat(item) );
  }

  useEffect(() => {
    if (selectedImagesCollection.length < 1) {
      setDisplaySelectedImages(false);
    } else {
      setDisplaySelectedImages(true);
      console.log("selectedImagesCollection:", selectedImagesCollection)
      console.log(selectedImagesCollection.map((item) => {
        return item.id
      }))
    }
  }, [selectedImagesCollection])
  
  
  function removeFromCollection(item) {
    console.log("Remove ", item.title, " this item from collection");
    let selectedImagesArray = selectedImagesCollection;
    // using the _Lodash library to remove the item from the
    // array of selected images
    // https://lodash.com/docs/#reject
    selectedImagesArray = _reject(selectedImagesArray, (theObject) => {
      return theObject.id === item.id;
    });
    setSelectedImagesCollection(selectedImagesArray)
  }

  function whichButton(item) {
 
    let buttonResult = "";
    console.log("selectedImagesCollection:", selectedImagesCollection)

    if (selectedImagesCollection.includes(item)) {
      console.log("💋 item included", item.id)
      // could this be a switch statement?
      buttonResult = (
        <button
          type="button"
          value={item.id}
          className="results-button-in-collection"
        >
          in collection
        </button>
      );
    } else {
      console.log("👎 item NOT included", item.id)
      buttonResult = (
        <button
          type="button"
          value={item.id}
          className="results-button-add-to-collection"
          onClick={() => {
            addToCollection(item);
          }}
        >
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
    let dir = `https://meeting-background-maker.s3.amazonaws.com/app-backgrounds/`
    document
      .querySelector(".clip-text")
      .style.setProperty(
        "background", `url(`+ dir + randomNumber + `.png)`
      );
    document
      .querySelector("body")
      .style.setProperty(
        "background", `url(`+ dir + randomNumber + `.png)`
      );

      /* We change the background often for fun
      Sometimes, we change the background and
      there is no computer screen icon
      Only change the background of the computer icon,
      if it's there. */
      let compyIcon = document.querySelector("#computer-screen") !== null;
      if (compyIcon) {
        document
          .querySelector("#computer-screen")
          .style.setProperty(
            "background", `url(`+ dir + randomNumber + `.png)`
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


   function zipDownloadFolderSelectedImages() {
    /* At this stage selectedImagesCollection is an array of
    large object constaining interesting data about the items.
    All we are interested in is the item id, as that is what is
    used as file names in AWS. The frist step is to map over the
    large object and push into an array the the key "id" and its
    corresponding value. Now we have the imgJpegArray, which is
    being send in the request to the server,
    which will then speak to AWS */
    const imgJpegArray = [];
    selectedImagesCollection.map( (item) => {
      for (const [key, value] of Object.entries(item)) {
        if (key === "id") {
          console.log(`${key}: ${value}`);
          imgJpegArray.push(value + '.jpg')
          console.log("imgJpegArray:", imgJpegArray)
        }
      }
    })

    let request = {
      params: imgJpegArray,
      responseType: 'blob',
    };

    axios.get(serverURL + `download/`, request)
      .then(function (response) {
        console.log("response:", response);
        const downloadUrl = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'meeting-backgrounds.zip');
        document.body.appendChild(link);
        link.click();
        link.remove();
      })
      .catch(function (error) {
        // handle error
        console.log("downloadZip error:", error);
      })
  } 

function handleDropdownChange(event) {
  setValue(event.target.value)
}

function handleDropdownSubmit(event) {
  console.log("handleDropdownSubmit clicked value is:", value)
}

    return (
      <div className="App app-container">
        <Header />

        <nav id="section-headers">
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
        </nav>

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
            activeButton={activeButton}
            whichButton={whichButton}
            zipDownloadFolderSelectedImages={zipDownloadFolderSelectedImages}
            userSelectFilterTerm={userSelectFilterTerm}
            handleDropdownSubmit={handleDropdownSubmit}
            onChange={handleDropdownChange}
            removeFromCollection={removeFromCollection}
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
