import { memo } from 'react';
import CuratedSetsImageGallery from './CuratedSetsImageGallery';
import Masonry from 'react-masonry-css';
import { CuratedSetsType } from '../types';

type Props = {
  activeTab: 0 | 1;
  curatedSetsArray: CuratedSetsType[];
};

function CuratedSetComponent({ activeTab, curatedSetsArray }: Props) {
  // For use with Masonry package
  const breakpointColumnsObj = {
    default: 3,
    860: 2,
    650: 1,
  };

  return (
    <section
      id="curated-set-window"
      style={{
        // activeTab 1 means the user has clicked on
        // the Curated sets tab
        display: activeTab === 1 ? 'block' : 'none',
      }}
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid curated-sets-list"
        columnClassName="my-masonry-grid_column"
      >
        {curatedSetsArray.map((item: CuratedSetsType, index: number) => {
          return (
            <div key={index + '-card'} className="curated-set-card card" data-value={item.setName}>
              <h4 key={index + '-label'} className="curated-set-label" data-value={item.setName}>
                {item.setName}
              </h4>

              <a
                href={
                  // machineName is something I created.
                  // It has no spaces
                  `https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds-curated-sets/` +
                  item.machineName +
                  '.zip'
                }
              >
                <button key={item.setName + 'download-button'} className="curated-set-download-button">
                  <svg className="svg-icon" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"
                    />
                  </svg>
                  Download image set
                </button>
              </a>

              <CuratedSetsImageGallery curatedSetsArray={curatedSetsArray} index={index} />

              <a
                href={
                  // machineName is something I created.
                  // It has no spaces
                  `https://meeting-background-maker.s3.amazonaws.com/meeting-backgrounds-curated-sets/` +
                  item.machineName +
                  '.zip'
                }
              >
                <button key={item.setName + 'download-button'} className="curated-set-download-button">
                  <svg className="svg-icon" viewBox="0 0 20 20">
                    <path
                      fill="none"
                      d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"
                    />
                  </svg>
                  Download image set
                </button>
              </a>
            </div>
          );
        })}
      </Masonry>
    </section>
  );
}

export default memo(CuratedSetComponent);
