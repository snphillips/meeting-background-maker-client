import React from 'react';
// import DownloadButton from './DownloadButton'
import './index.css';
import Masonry from 'react-masonry-css';


export default class selectedImages extends React.Component {


   render() {

   // For use with Masonry package
    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    return (

      <div className="component"
           id="selected-images-component">

        <section>

        <h3>Your selected images</h3>

          <div>
            <p className="default-selected-message">No selected images yet</p>
          </div>

          <Masonry breakpointCols={breakpointColumnsObj}
           className="my-masonry-grid curated-sets-list selected-images-gallery image-grid"
           columnClassName="my-masonry-grid_column"
           >

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

         </Masonry>

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
