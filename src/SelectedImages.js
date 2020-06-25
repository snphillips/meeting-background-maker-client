import React from 'react';
// import DownloadButton from './DownloadButton'
import './index.css';


export default class selectedImages extends React.Component {


  render() {

    return (

      <div className="component"
           id="selected-images-component">

        <section>

        <h2>Your selected images</h2>


          <div className="selected-images-gallery image-grid">

                 {this.props.selectedImages.map( (item, index) => {


                      return(

                        <div className="image-card card"
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

      </section>

        <button className="download-button"
                value=""
                onClick={ (event) => {
                  console.log("download selected images")
                  this.props.zipDownloadFolderSelectedImages()
                }}>
                Download Set of Selected Images
       </button>
    </div>
  );
  }


}
