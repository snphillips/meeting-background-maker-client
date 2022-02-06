import React from "react";

export default function Collection(props) {
  return (
      <section className="component">
        <h2>Your selected images:</h2>

        <div className="selected-image-placehodler">
          <p>No selected images yet</p>
        </div>

        <div className="selected-images-gallery results">
          {props.selectedImages.map((item) => {
            let imageIndex = props.selectedImages.indexOf(item);
            console.log("imageIndex as we build the gallery:", imageIndex);

            return (
              <div className="image-card">
                <img
                  className="background-img"
                  src={item.images[0].b.url}
                  alt={item.title}
                />
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </section>
    );
}
