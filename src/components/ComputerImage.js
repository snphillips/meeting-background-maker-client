import React from "react";

export default function ComputerImage(props) {
  return (

      <section 
        id="computer-image">

        {props.displayComputerImage && 

        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
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
             justifyContent: "end",
             flexDirection: "column"
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
           }}/>
           <div
             id="person=body"
             style={{
              width: "80px",
              height: "80px",
              background: "black",
             }} 
           />
         </div>
        </div>
        <div
        id="computer-keyboard"
        style={{
          borderTop: "3px solid white",
          borderBottom: "3px solid white",
          borderLeft: "6px solid white",
          borderRight: "6px solid white",
          width: "297px",
          height: "50px",
          // clipPath: "polygon(20% 0%, 80% 0%, 91% 100%, 8% 100%)",
          transform: "skew(54deg, 0deg) translate(40px, -2px)"
        }}
        >

        </div>

        </div>
        }

      </section>
    );
}
