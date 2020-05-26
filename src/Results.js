import React from 'react';
import './index.css';


export default class Results extends React.Component {


  render() {

    return (
      <section className="component">

          <div className="pre-selected-images-gallery">

                 {this.props.preSelectedImages.map( item => {

                    let imageIndex = this.props.preSelectedImages.indexOf(item)
                    console.log("imageIndex as we build the gallery:", imageIndex)


                      return(

                        <div className="image-card">

                          <a href={item.url}>
                            <img className="background-img"
                               src={item.images[0].b.url}
                               alt={item.title}
                              />
                          </a>
                              <p>{item.title}</p>
                              <button>Add to collection</button>

                        </div>
                        )

                       })
                 }

        </div>


    </section>
  );
  }




}

