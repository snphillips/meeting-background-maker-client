import { memo } from 'react';

function Header() {
  return (
    <div className="header-container">
      <h1 className="header clip-text">meeting background maker</h1>

      <section className="app-description">
        <p>Generate backgrounds for video meetings from the Cooper Hewitt Museum's archive.</p>
        <p>Filter using keywords, or download sets of curated images.</p>
      </section>
    </div>
  );
}

export default memo(Header);
