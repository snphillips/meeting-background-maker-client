import React from "react";

export default function ComputerImage(props) {
  return (

      <section 
        id="computer-image-container"
        style={{
        }}
      >

        {props.displayComputerImage && 

        <div
        id="computer-image" 
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "400px",
          maxWidth: "100%",
          height: "270px",
          maxHeight: "auto",
          margin: "0 auto",
        }}>

        <div 
          id="computer-screen"
          style={{
            display: "block",
            border: "3px solid white",
            width: "70%",
            height: "70%",
            margin: "1rem auto 0 auto",
            background: "transparent",
          }}
          >
         <div 
           id="person"
           style={{
             height: "100%",
             display: "flex",
             alignItems: "center",
             justifyContent: "end",
             flexDirection: "column",
            }}
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
              //  width: "0",
              //  height: "0",
              //  borderLeft: "50px solid transparent",
              //  borderRight: "50px solid transparent",
              //  borderBottom: "100px solid black"
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
          width: "68%",
          height: "20%",
          transform: "skew(54deg, 0deg) translate(42px, -2px)",
        }}
        >

        </div>

        </div>
        }

      </section>
    );
}
