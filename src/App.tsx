import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import _reject from 'lodash/reject';
import Header from './components/Header';
import Footer from './components/Footer';
import CuratedSetsComponent from './components/CuratedSetsComponent';
import YourBackgroundsComponent from './components/YourBackgroundsComponent';

// Curated Sets
import cocktailHour from './CuratedSets/cocktailHour';
import colorTheory from './CuratedSets/colorTheory';
import gardenParty from './CuratedSets/gardenParty';
import gourmet from './CuratedSets/gourmet';
import hermanMillerPicnic from './CuratedSets/hermanMillerPicnic';
import photoMural from './CuratedSets/photoMural';
import kolomanMoser from './CuratedSets/kolomanMoser';
import { MuseumItemType, FilterTermType } from './types';
const curatedSetsArray = [
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
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [value, setValue] = useState<FilterTermType | null>('cubism'); // the user select filter term
  const [displayComputerImage, setDisplayComputerImage] = useState(true);
  const [displaySelectedImages, setDisplaySelectedImages] = useState(false);
  const [displaySearchResults, setDisplaySearchResults] = useState(false);
  const [preSelectedImages, setPreSelectedImages] = useState<[] | MuseumItemType[]>([]);
  const [selectedImagesCollection, setSelectedImagesCollection] = useState<[] | MuseumItemType[]>([]);
  const [activeButton, setActiveButton] = useState<FilterTermType | 'button-id'>('button-id');
  const [activeTab, setActiveTab] = useState<0 | 1>(0);

  // For Profiler
  function onRenderCallback(
    id: any, // the "id" prop of the Profiler tree that has just committed
    phase: any, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
    actualDuration: any, // time spent rendering the committed update
    baseDuration: any, // estimated time to render the entire subtree without memoization
    startTime: any, // when React began rendering this update
    commitTime: any, // when React committed this update
    interactions: any, // the Set of interactions belonging to this update
  ) {
    // Aggregate or log render timings...
    console.log({
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    });
  }

  /*
  ===================================
  Runs on first render
  Has empty [] as dependency
  ===================================
  */
  useEffect(() => {
    // Only runs once per app load
    let didInit = false;
    if (!didInit) {
      didInit = true;
      shuffleBackgroundClipTextImage();
    }
  }, []);

  function userSelectsFilterTerm(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    const target = event.target as HTMLInputElement;
    event.preventDefault();
    setValue(target.value as FilterTermType);
    /*
    The 'active' filter button gets an inverted style
    We pass activeButton state to FilterButtons
    */
    setActiveButton(target.value as FilterTermType);
  }

  /*
===================================
Runs Whenever 'value' changes
Has [value] as dependency
===================================
*/
  useEffect(() => {
    function searchByTag() {
      setServerError(false);
      setLoading(true);
      shuffleBackgroundClipTextImage();
      const sendGetRequest = async () => {
        try {
          console.log('value', value);
          const response = await axios({
            method: 'get',
            url: serverURL + `searchbytag/` + value,
            timeout: 10000,
          });
          console.log('axios response.data:', response.data);
          setPreSelectedImages(response.data);
          setDisplaySearchResults(true);
        } catch (error) {
          console.log('axios api call error:', error);
          setServerError(true);
        } finally {
          setLoading(false);
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
  }, [serverURL, value]);

  useEffect(() => {
    if (selectedImagesCollection.length < 1) {
      setDisplaySelectedImages(false);
    } else {
      setDisplaySelectedImages(true);
    }
  }, [selectedImagesCollection]);

  function removeItemFromCollection(item: MuseumItemType) {
    let selectedImagesArray = selectedImagesCollection;
    // using the _Lodash library to remove the item from the
    // array of selected images
    // https://lodash.com/docs/#reject
    selectedImagesArray = _reject(selectedImagesArray, (theObject: MuseumItemType) => {
      return theObject.id === item.id;
    });
    setSelectedImagesCollection(selectedImagesArray);
  }

  function shuffleBackgroundClipTextImage() {
    let numOfBackgroundImages = 31;
    let randomNumber = Math.floor(Math.random() * numOfBackgroundImages);
    let dir = `https://meeting-background-maker.s3.amazonaws.com/app-backgrounds/`;
    let clipTextElement = document.querySelector('.clip-text') as HTMLElement | null;
    let bodyElement = document.querySelector('body') as HTMLElement;
    let computerScreenElement = document.querySelector('#computer-screen') as HTMLElement | null;

    // clipTextElement wont be null but if it is, we don't care for now
    // as this feature is only window dressing
    clipTextElement?.style.setProperty('background', `url(` + dir + randomNumber + `.png)`);
    bodyElement!.style.setProperty('background', `url(` + dir + randomNumber + `.png)`);

    /*
      We change the background often for fun.
      Sometimes, we change the background and there is no computer screen icon.
      Only change the background of the computer icon, if it's there.
      */
    if (computerScreenElement) {
      computerScreenElement.style.setProperty('background', `url(` + dir + randomNumber + `.png)`);
    }

    clipTextElement?.style.setProperty('color', '#fff');
    clipTextElement?.style.setProperty('-webkit-text-fill-color', 'transparent');
    clipTextElement?.style.setProperty('-webkit-background-clip', 'text');
  }

  function zipDownloadFolderSelectedImages() {
    /*
    At this stage selectedImagesCollection is an array of
    large object containing interesting data about the items.
    
    All we are interested in is the item id, as that is what is
    used as file names in AWS. The first step is to map over the
    large object and push into an array the the key 'id' and its
    corresponding value. Now we have the imgJpegArray, which is
    being send in the request to the server,
    which will then speak to AWS
    */
    const imgJpegArray: string[] = [];
    selectedImagesCollection.forEach((item) => {
      if ('id' in item) {
        imgJpegArray.push(item.id + '.jpg');
      }
    });

    let request = {
      params: imgJpegArray,
      responseType: 'blob' as 'blob',
    };

    axios
      .get(serverURL + `download/`, request)
      .then(function (response) {
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
        // TODO: indicate to user when something goes wrong
        // perhaps a cute image from the museum?
        // A message to view curated types?
        console.log('downloadZip error:', error);
      });
  }

  return (
    <div className="App app-container">
      <React.Profiler id="MyComponent" onRender={onRenderCallback}>
        <Header />

        <nav id="section-headers">
          <ul id="nav-tabs">
            <li className="user-generated-set-div">
              <h2
                className={`tab ${activeTab === 0 ? 'active-tab' : ''}`}
                id="user-generated-set-tab"
                onClick={() => {
                  setActiveTab(0);
                }}
              >
                Your Backgrounds
              </h2>
            </li>

            <li className="curated-set-heading-div">
              <h2
                className={`tab ${activeTab === 1 ? 'active-tab' : ''}`}
                id="curated-set-tab"
                onClick={() => {
                  setActiveTab(1);
                }}
              >
                Curated Sets
              </h2>
            </li>
          </ul>
        </nav>

        <section id="component-sections">
          <YourBackgroundsComponent
            activeButton={activeButton}
            activeTab={activeTab}
            displayComputerImage={displayComputerImage}
            displaySearchResults={displaySearchResults}
            displaySelectedImages={displaySelectedImages}
            loading={loading}
            preSelectedImages={preSelectedImages}
            removeItemFromCollection={removeItemFromCollection}
            selectedImagesCollection={selectedImagesCollection}
            setSelectedImagesCollection={setSelectedImagesCollection}
            serverError={serverError}
            userSelectsFilterTerm={userSelectsFilterTerm}
            value={value}
            zipDownloadFolderSelectedImages={zipDownloadFolderSelectedImages}
          />

          <CuratedSetsComponent activeTab={activeTab} curatedSetsArray={curatedSetsArray} />
        </section>
        <Footer />
      </React.Profiler>
    </div>
  );
}
