import './ComputerImage.css';
import { memo } from 'react';

type Props = {
  displayComputerImage: boolean;
};

function ComputerImage({ displayComputerImage }: Props) {
  return (
    <section id="computer-image-container">
      {displayComputerImage && (
        <div id="computer-image">
          <div id="computer-screen">
            <div id="person">
              <div id="head" />
              <div id="person-body" />
            </div>
          </div>
          <div id="computer-keyboard" />
        </div>
      )}
    </section>
  );
}
export default memo(ComputerImage);
