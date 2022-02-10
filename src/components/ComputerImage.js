import React from "react";

export default function ComputerImage(props) {
  return (

      <section 
        id="computer-image">

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>

        <div 
          id="computer-screen"
          style={{
            display: "block",
            border: "3px solid white",
            width: "300px",
            height: "190px",
            margin: "1rem auto 0 auto",
            background: "transparent"
        }}>
         <div 
           style={{
             height: "100%",
             display: "flex",
             alignItems: "center",
             justifyContent: "center",
           }}
           id="person"
           >
           <div
           id="head"
           style={{
             width: "80px",
             height: "80px",
             background: "black",
             display: "flex",
             borderRadius: "50%"
           }}>

           </div>
         </div>
        </div>

        </div>

      </section>
    );
}
