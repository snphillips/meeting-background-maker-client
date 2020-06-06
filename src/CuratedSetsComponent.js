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


          {curatedSetsArray.map( item => {

          // console.log("button value:", item)

            return(

              <div className="curated-set-card card"
                    value="{item.setName}"
                    >

                <div key=""
                    className="curated-set-label"
                    type="download"
                    value='{item.setName}'
                    onClick={ (event) => {
                      console.log("button value is:", event.target.value)
                      // this.props.handleFilterSubmit(event)
                    }}>
                     {item.setName}
                </div>

                <button key=""
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

