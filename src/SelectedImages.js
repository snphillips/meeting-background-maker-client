import React from 'react';
import './index.css';


export default class selectedImages extends React.Component {


  render() {

    return (
      <section className="component">

        <h2>Your selected images:</h2>

          <div className="selected-images-placeholder">
            <p>No selected images</p>
          </div>

          <div className="selected-images-gallery">

                 {this.props.selectedImages.map( item => {


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

