import React from 'react';
import './index.css';


export default class Results extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    buttonTextValue: 'Add to collection'
  };

  // This binding is necessary to make `this` work in the callback
  // this.handleChange = this.handleChange.bind(this);

}

// ***********************************
// End of constructor
// ***********************************


  render() {

    return (
      <section className="component">

          <div className="results-placeholder">
            <p>No images yet.</p>
          </div>

          <div className="pre-selected-images-gallery results">

                 {this.props.preSelectedImages.map( item => {


                    // not really using this but it's helpful for tracking
                    // let imageIndex = this.props.preSelectedImages.indexOf(item)
                    // console.log("imageIndex as gallery built:", imageIndex)

                      return(

                        <div key={item.id}
                             className="image-card">

                          <a href={item.url}>
                            <img className="background-img"
                               src={item.images[0].b.url}
                               alt={item.title}
                              />
                          </a>
                              <p className="item-title">{item.title}</p>
                              <p className="item-title">{item.id}</p>

                              <button type="submit"
                                      value={item}

                                      onClick={ (event) => {
                                        console.log("button value is:", item, item.id)
                                        this.props.handleAddToCollectionSubmit(item)
                                        this.setState({buttonTextValue: "in collection"})
                                      }}
                                      >
                                        {this.state.buttonTextValue}
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





