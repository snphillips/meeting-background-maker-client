import React from 'react';
import './index.css';


export default class Results extends React.Component {


  render() {

    return (
      <section className="component">

          <div className="filter-results-placehodler">
            <p>No images yet.</p>
          </div>

          <div className="pre-selected-images-gallery results">

                 {this.props.preSelectedImages.map( item => {


                    // not really using this but it's helpful for tracking
                    let imageIndex = this.props.preSelectedImages.indexOf(item)
                    console.log("imageIndex as gallery built:", imageIndex)


                      return(

                        <div className="image-card">

                          <a href={item.url}>
                            <img className="background-img"
                               src={item.images[0].b.url}
                               alt={item.title}

                              />
                          </a>
                              <p className="item-title">{item.title}</p>
                              <p className="item-title">{item.id}</p>

                              <button className="add-collection-button"
                                      onClick={this.props.addToCollection}
                                      >
                                        Add to collection
                              </button>

                        </div>
                        )

                       })
                 }

        </div>


    </section>
  );
  }

}





