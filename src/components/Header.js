import React from "react";
import LoadingSpinner from "../LoadingSpinner";

export default function Header(props) {
  return (
    <div className="header-container">
      <h1 className="header clip-text">meeting background maker</h1>

      <section className="app-description">
        <p>
          Generate backgrounds for video meetings from the Cooper Hewitt
          Museum's archive.
        </p>
        {/* <p>Filter using keywords, or download curated sets.</p> */}

      </section>
    </div>
  );
}
