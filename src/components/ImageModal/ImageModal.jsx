import Modal from 'react-modal';
import css from './ImageModal.module.css';

// Modalın kök dizine (index.html'deki #root'a) bağlanması gerekir
Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, selectedImage }) => {
  if (!selectedImage) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose} // ESC tuşu ve dışa tıklama ile kapanmayı sağlar
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Image Modal"
    >
      <div className={css.content}>
        <img
          className={css.image}
          src={selectedImage.urls.regular} // Büyük formatlı resim
          alt={selectedImage.alt_description}
        />
        {/* Opsiyonel: Resim hakkında ek bilgi ekleyebilirsin */}
        <div className={css.info}>
          <p>Author: {selectedImage.user.name}</p>
          <p>Likes: {selectedImage.likes}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;