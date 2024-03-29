import { memo } from 'react';

function Footer() {
  return (
    <footer>
      <span className="footer-link">
        <a href="https://sarahphillipsdev.surge.sh" id="portfolio-link">
          by Sarah Phillips{' '}
        </a>
      </span>

      <span className="footer-link">
        <a href="https://github.com/snphillips/meeting-background-maker-client" id="github-link">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
      </span>
    </footer>
  );
}

export default memo(Footer);
