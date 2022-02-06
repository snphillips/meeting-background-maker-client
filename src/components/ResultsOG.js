import React from 'react';
import './index.css';


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

    return (
      <section className="component"
               id="results-component">

          <h2>Search Results</h2>

          <div className="pre-selected-images-gallery results">

                 {this.props.preSelectedImages.map( item => {


                    // not really using this but it's helpful for tracking
                    // let imageIndex = this.props.preSelectedImages.indexOf(item)
                    // console.log("imageIndex as gallery built:", imageIndex)

                      return(

                        <div key={item.id}
                             className="image-card">

                          <a href={item.url}>
                            <img className="result-img"
                                 src={item.images[0].b.url}
                                 alt={item.title}
                                 onLoad={this.props.removeSkinnyImages}
                              />
                          </a>
                              <p className="item-title">{item.title}</p>
                              <p className="item-title">{item.id}</p>


                            {this.props.whichButton(item)}


                        </div>
                        )

                       })
                 }

        </div>


    </section>
  );
  }

}





