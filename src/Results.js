import React from 'react';
import './index.css';


export default class Results extends React.Component {
  // constructor(props) {
  //   super(props);

  //  // "this" binding

  // }



  render() {

    return (
      <section className="component">

          <div className="gallery">


                 {this.props.preSelectedImages.map( item => {

                    let imageIndex = this.props.preSelectedImages.indexOf(item)
                    console.log("imageIndex as we build the gallery:", imageIndex)


                      return(

                        <div className="image-card">

                          <img className="art-img"
                               src={item.link}
                               alt={item.title}
                              />

                        </div>
                        )

                       })
                 }

        </div>


    </section>
  );
  }




}

