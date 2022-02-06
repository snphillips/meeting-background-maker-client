import React from 'react';
import './index.css';


export default class collection extends React.Component {


  render() {

    return (
      <section className="component">

        <h2>Your selected images:</h2>

          <div className="selected-image-placehodler">
            <p>No selected images yet</p>
          </div>

          <div className="selected-images-gallery results">

                 {this.props.selectedImages.map( item => {

                    let imageIndex = this.props.selectedImages.indexOf(item)
                    console.log("imageIndex as we build the gallery:", imageIndex)


                      return(

                        <div className="image-card">

                          <img className="background-img"
                               src={item.images[0].b.url}
                               alt={item.title}
                              />
                              <p>{item.title}</p>

                        </div>
                        )

                       })
                 }

        </div>


    </section>
  );
  }




}

