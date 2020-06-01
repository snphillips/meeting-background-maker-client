import React from 'react';
import DownloadButton from './DownloadButton'
import './index.css';


export default class selectedImages extends React.Component {


  render() {

    return (
      <section className="component"
               id="selected-images-component">

        <h2>Your selected images:</h2>
        <DownloadButton />

          <div className="selected-images-gallery">

                 {this.props.selectedImages.map( item => {


                      return(

                        <div className="image-card"
                             key={item.id}
                             >

                          <img className="selected-img"
                               src={item.images[0].b.url}
                               alt={item.title}
                              />
                              <p>{item.title}</p>

                        </div>
                        )

                       })
                 }

        </div>
        <DownloadButton />


    </section>
  );
  }


}


