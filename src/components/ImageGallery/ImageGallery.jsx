import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {items.map((item, index) => (
      
        <li key={`${item.id}-${index}`} className={css.item}>
          <ImageCard data={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;