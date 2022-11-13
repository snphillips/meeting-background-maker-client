import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import _reject from 'lodash/reject.js';
import Header from './components/Header.js';
import CuratedSetsComponent from './components/CuratedSetsComponent.js';
import Footer from './components/Footer.js';
import YourBackgroundsComponent from './components/YourBackgroundsComponent.js';

// Curated Sets
import cocktailHour from './CuratedSets/cocktailHour.js';
import colorTheory from './CuratedSets/colorTheory.js';
import gardenParty from './CuratedSets/gardenParty.js';
import gourmet from './CuratedSets/gourmet.js';
import hermanMillerPicnic from './CuratedSets/hermanMillerPicnic.js';
import photoMural from './CuratedSets/photoMural.js';
import kolomanMoser from './CuratedSets/kolomanMoser.js';
const curatedSets = [
  cocktailHour,
  colorTheory,
  gardenParty,
  gourmet,
  hermanMillerPicnic,
  photoMural,
  kolomanMoser,
];

export default function App() {
  // const serverURL = `http://localhost:3001/`
  const serverURL = `https://meeting-background-server.herokuapp.com/`;

  const initialRender = useRef(true);
  const [loading, setLoading] = useState(false); // the loading spinner
  const [value, setValue] = useState(); // the user select filter term
  const [displayComputerImage, setDisplayComputerImage] = useState(true);
  const [displaySelectedImages, setDisplaySelectedImages] = useState(false);
  const [displaySearchResults, setDisplaySearchResults] = useState(false);
  const [preSelectedImages, setPreSelectedImages] = useState([]);
  const [selectedImagesCollection, setSelectedImagesCollection] = useState([]);
  const [activeButton, setActiveButton] = useState('button-id');
  const [activeTab, setActiveTab] = useState(0);

  /*
  ===================================
  Runs on first render
  Has empty [] as dependency
  ===================================
  */
  useEffect(() => {
    shuffleBackgroundClipTextImage();
  }, []);

  function userSelectFilterTerm(event) {
    event.preventDefault();
    console.log('userSelectFilterTerm:', event.target.value);
    setValue(event.target.value);
    /*
    The 'active' filter button gets an inverted style
    We pass activeButton state to FilterButtons
    */
    setActiveButton(event.target.value);
  }

  /*
===================================
Runs Whenever 'value' changes
Has [value] as dependency
===================================
*/
  useEffect(() => {
    function searchByTag() {
      // start the loading spinner
      setLoading(true);
      // console.log('value is: ', value);
      shuffleBackgroundClipTextImage();

      const sendGetRequest = async () => {
        try {
          const response = await axios.get(serverURL + `searchbytag/` + value);
          // console.log(`🍩 The search value is:`, value, `response.data:`, response.data);
          // console.log(
          //   response.data.map((item) => {
          //     return item.id;
          //   })
          // );

          setPreSelectedImages(response.data);
          /*
          1) Stop the loading spinner
          2) Show the component that displays the preSelected
          results from the search
          */
          setLoading(false);
          setDisplaySearchResults(true);
        } catch (error) {
          // TODO: communicate to user if error
          console.log('axios api call catch error:', error);
        }
      };
      sendGetRequest();
    }

    // don't run on initial render
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      searchByTag();
      setDisplayComputerImage(false);
      setDisplaySearchResults(true);
    }
  }, [value, serverURL]);

  // Run this useEffect every time selectedImagesCollection updates
  useEffect(() => {
    if (selectedImagesCollection.length < 1) {
      setDisplaySelectedImages(false);
    } else {
      setDisplaySelectedImages(true);
      console.log('selectedImagesCollection:', selectedImagesCollection);
      console.log(
        selectedImagesCollection.map((item) => {
          return item.id;
        })
      );
    }
  }, [selectedImagesCollection]);

  function removeFromCollection(item) {
    console.log('Remove ', item.title, ' this item from collection');
    let selectedImagesArray = selectedImagesCollection;
    // using the _Lodash library to remove the item from the
    // array of selected images
    // https://lodash.com/docs/#reject
    selectedImagesArray = _reject(selectedImagesArray, (theObject) => {
      return theObject.id === item.id;
    });
    setSelectedImagesCollection(selectedImagesArray);
  }

  function shuffleBackgroundClipTextImage() {
    let numOfBackgroundImages = 31;
    let randomNumber = Math.floor(Math.random() * numOfBackgroundImages);
    // console.log('random background image number is: ', randomNumber);
    let dir = `https://meeting-background-maker.s3.amazonaws.com/app-backgrounds/`;
    document
      .querySelector('.clip-text')
      .style.setProperty('background', `url(` + dir + randomNumber + `.png)`);
    document
      .querySelector('body')
      .style.setProperty('background', `url(` + dir + randomNumber + `.png)`);

    /*
      We change the background often for fun.
      Sometimes, we change the background and there is no computer screen icon.
      Only change the background of the computer icon, if it's there.
      */
    let compyIcon = document.querySelector('#computer-screen') !== null;
    if (compyIcon) {
      document
        .querySelector('#computer-screen')
        .style.setProperty('background', `url(` + dir + randomNumber + `.png)`);
    }

    document.querySelector('.clip-text').style.setProperty('color', '#fff;');
    document
      .querySelector('.clip-text')
      .style.setProperty('-webkit-text-fill-color', 'transparent');
    document.querySelector('.clip-text').style.setProperty('-webkit-background-clip', 'text');
    // document.querySelector('.header').style.textShadow = '2px 2px 2px #fff';
  }

  function zipDownloadFolderSelectedImages() {
    /*
    At this stage selectedImagesCollection is an array of
    large object constaining interesting data about the items.
    
    All we are interested in is the item id, as that is what is
    used as file names in AWS. The frist step is to map over the
    large object and push into an array the the key 'id' and its
    corresponding value. Now we have the imgJpegArray, which is
    being send in the request to the server,
    which will then speak to AWS
    */
    const imgJpegArray = [];
    selectedImagesCollection.map((item) => {
      for (const [key, value] of Object.entries(item)) {
        if (key === 'id') {
          console.log(`${key}: ${value}`);
          return imgJpegArray.push(value + '.jpg');
        }
      }
    });

    let request = {
      params: imgJpegArray,
      responseType: 'blob',
    };

    axios
      .get(serverURL + `download/`, request)
      .then(function (response) {
        console.log('response:', response);
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
        // TODO: indicate to user when somthing goes wrong
        console.log('downloadZip error:', error);
      });
  }

  function handleDropdownChange(event) {
    setValue(event.target.value);
  }

  function handleDropdownSubmit(event) {
    // TODO: what's this for? Get rid of it?
    console.log('handleDropdownSubmit clicked value is:', value);
  }

  return (
    <div className='App app-container'>
      <Header />

      <nav id='section-headers'>
        <ul id='nav-tabs'>
          <li className='user-generated-set-div'>
            <h2
              className={`tab ${activeTab === 0 ? 'active-tab' : ''}`}
              id='user-generated-set-tab'
              onClick={() => {
                setActiveTab(0);
              }}
            >
              Your Backgrounds
            </h2>
          </li>

          <li className='curated-set-heading-div'>
            <h2
              className={`tab ${activeTab === 1 ? 'active-tab' : ''}`}
              id='curated-set-tab'
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Curated Sets
            </h2>
          </li>
        </ul>
      </nav>

      <section id='component-sections'>
        <YourBackgroundsComponent
          activeButton={activeButton}
          activeTab={activeTab}
          displayComputerImage={displayComputerImage}
          displaySearchResults={displaySearchResults}
          displaySelectedImages={displaySelectedImages}
          handleDropdownSubmit={handleDropdownSubmit}
          loading={loading}
          onChange={handleDropdownChange}
          preSelectedImages={preSelectedImages}
          removeFromCollection={removeFromCollection}
          selectedImagesCollection={selectedImagesCollection}
          setSelectedImagesCollection={setSelectedImagesCollection}
          userSelectFilterTerm={userSelectFilterTerm}
          zipDownloadFolderSelectedImages={zipDownloadFolderSelectedImages}
        />

        <CuratedSetsComponent activeTab={activeTab} curatedSets={curatedSets} />
      </section>
      <Footer />
    </div>
  );
}
