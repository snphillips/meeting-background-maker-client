import React from 'react';
import { ModalStateType, ModalPropertiesMaxWidthType }  from '../types'

// TODO: copied from other project. This needs to be customized

/* =========================================================
When the user clicks on an image, a modal opens up.
The modal closes when the user clicks "close" X button.
There are forward and back buttons that allow the user
to view all images in modal view
========================================================= */

type Props = {
  displayModal: boolean;
  closeModal: () => void;
  modalImageIndex: number;
  modalNextImage: (parameter: number) => void;
  modalPreviousImage: (parameter: number) => void;
  modalPropertiesMaxWidth: ModalPropertiesMaxWidthType;
  displayModalNextButton: boolean;
  displayModalBackButton: boolean;
  modalImageURL: any;
};

export default function Modal({
  displayModal,
  closeModal,
  modalImageIndex,
  modalPreviousImage,
  modalNextImage,
  modalPropertiesMaxWidth,
  displayModalNextButton,
  displayModalBackButton,
  modalImageURL
}: Props) {

  console.log('modalImageURL', modalImageURL)

  return (
    <>
      {displayModal && (
        <div className='modal-background'>
          <div  className='modal-content-container'>
            <section className='modal-left-container'>
            { displayModalBackButton &&
              <div
                id='modal-back-button'
                onClick={() => {
                  let imageIndex = modalImageIndex - 1;
                  modalPreviousImage(imageIndex);
                }}
              >
                <span>
                  <svg
                    viewBox='0 0 24 24'
                    width='36'
                    height='36'
                    stroke='currentColor'
                    strokeWidth='1'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='19' y1='12' x2='5' y2='12'></line>
                    <polyline points='12 19 5 12 12 5'></polyline>
                  </svg>
                </span>
              </div>
            }
            </section>

            <section className='modal-image-and-info-container' onClick={closeModal}>
              <div className='modal-image-container'>
                <img 
                id='modal-image'
                src={modalImageURL}
                alt=''
                style={{'maxWidth': modalPropertiesMaxWidth}}
                />
              </div>

              <div 
              className='modal-info-container'
              style={{'maxWidth': modalPropertiesMaxWidth}}
              >
              </div>
            </section>

            <section className='modal-right-container'>
              <div className='modal-close-button' onClick={closeModal}>
                <span>
                  <svg
                    viewBox='0 0 24 24'
                    width='36'
                    height='36'
                    stroke='currentColor'
                    strokeWidth='1'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='18' y1='6' x2='6' y2='18'></line>
                    <line x1='6' y1='6' x2='18' y2='18'></line>
                  </svg>
                </span>
              </div>

              {displayModalNextButton && 
              <div
                id='modal-next-button'
                onClick={() => {
                  let imageIndex = modalImageIndex + 1;
                  modalNextImage(imageIndex);
                }}
              >
                <span>
                  <svg
                    viewBox='0 0 24 24'
                    width='36'
                    height='36'
                    stroke='currentColor'
                    strokeWidth='1'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                    <polyline points='12 5 19 12 12 19'></polyline>
                  </svg>
                </span>
              </div>
          }
            </section>
          </div>
        </div>
      )}
    </>
  );
}