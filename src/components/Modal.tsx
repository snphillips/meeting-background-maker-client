type Props = {
  displayModal: boolean;
  onCloseModal: () => void;
  modalImageIndex: number;
  onNextImageModal: () => void;
  onPreviousImageModal: () => void;
  displayModalNextButton: boolean;
  displayModalBackButton: boolean;
  modalImageURL: string | undefined;
};

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="36"
      height="36"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1={direction === 'left' ? '19' : '5'} y1="12" x2={direction === 'left' ? '5' : '19'} y2="12" />
      <polyline points={direction === 'left' ? '12 19 5 12 12 5' : '12 5 19 12 12 19'} />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="36"
      height="36"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Modal({
  displayModal,
  onCloseModal,
  onPreviousImageModal,
  onNextImageModal,
  displayModalNextButton,
  displayModalBackButton,
  modalImageURL,
}: Props) {
  if (!displayModal) return null;

  return (
    <div className="modal-background">
      <div className="modal-content-container">
        <section className="modal-left-container">
          {displayModalBackButton && (
            <button id="modal-back-button" onClick={onPreviousImageModal} aria-label="Previous image">
              <ArrowIcon direction="left" />
            </button>
          )}
        </section>

        <section className="modal-image-and-info-container" onClick={onCloseModal}>
          <div className="modal-image-container">
            <img id="modal-image" src={modalImageURL} alt="" />
          </div>
        </section>

        <section className="modal-right-container">
          <button className="modal-close-button" onClick={onCloseModal} aria-label="Close modal">
            <CloseIcon />
          </button>

          {displayModalNextButton && (
            <button id="modal-next-button" onClick={onNextImageModal} aria-label="Next image">
              <ArrowIcon direction="right" />
            </button>
          )}
        </section>
      </div>
    </div>
  );
}
