import React, { Component } from 'react';
import './index.css';


export default class CuratedSetsComponent extends Component {


  render() {

    let curatedSetsArray = this.props.curatedSets
    console.log("curatedSetsArray:", curatedSetsArray)

    return (


      <section className="component">

        <h2>Curated Sets</h2>

        <div id="curated-sets-list">


          {curatedSetsArray.map( (item, index) => {

          // console.log("button value:", item)

            return(

              <div key={item.setName + "card"}
                   className="curated-set-card card"
                   value={item.setName}
                    >

                <div key={item.setName + "label"}
                     className="curated-set-label"
                     type="download"
                     value='{item.setName}'
                     onClick={ (event) => {
                      console.log("button value is:", event.target.value)
                      // this.props.handleFilterSubmit(event)
                    }}>
                     {item.setName}
                </div>

                <a href={item.images[0].url}>
                  <img className="curated-list-img"
                       src={item.images[0].imageURL}
                       alt={item.images[0].title}
                       onClick={ (event) => {
                        console.log(item.images[0].imageURL)

                       }}
                    />
                </a>

                <button key={item.setName + "button"}
                        className="curated-set-button"
                        type="download"
                        value='{item.setName}'
                        onClick={ (event) => {
                          console.log("download:", event.target.value)
                          // this.props.handleFilterSubmit(event)
                        }}>
                         download image set
                </button>

              </div>
            )
        })}


        </div>

      </section>
  );
  }




}

