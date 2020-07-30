import React from 'react';
import './index.css';
import Masonry from 'react-masonry-css';

// This component takes an array called preSelectedImages (that was populated
// when the user selected a search term), maps over that array and displays
// each image with info.

// TODO: if the array only contains jpegs from the server, you won't have any of
// the metadata that makes this app interesting. It seems you want to keep all this
// great metadata, but also bring over the path to the locally stored image.


export default class Results extends React.Component {
  constructor(props) {
  super(props);

  this.state = {

  };

  // This binding is necessary to make `this` work in the callback
  // this.handleChange = this.handleChange.bind(this);

}

// ***********************************
// End of constructor
// ***********************************

  render() {


    // For use with Masonry package
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };


    return (

      <section className="component"
               id="results-component">

          <h2>Search Results</h2>

              <div>
                <p className="default-results-message">Select a search term to view images from the Cooper Hewitt's collection.</p>
              </div>

            <Masonry breakpointCols={breakpointColumnsObj}
                     className="my-masonry-grid curated-sets-list pre-selected-images-gallery results image-grid"
                     columnClassName="my-masonry-grid_column"
                     >


                 {this.props.preSelectedImages.map( item => {

                  // console.log("hi from results.js. Item is:", item)

                      return(

                        <div key={item.id}
                             className="image-card card">

                          <a href={item.url}>
                            <img className="result-img"
                                 src={item.images[0].b.url}
                                 alt={item.title}
                              />
                          </a>
                              <p className="item-title">{item.title}</p>
                              <p className="item-title">{item.id}</p>


                            {this.props.whichButton(item)}


                        </div>
                        )

                       })
                 }

        </Masonry>


    </section>
  );
  }

}





