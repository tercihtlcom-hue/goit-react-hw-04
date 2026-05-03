import css from './ImageCard.module.css';

/**
 * ImageCard Bileşeni
 * 
 * @param {object} data - Unsplash API'den gelen resim nesnesi (urls, alt_description vb. içerir)
 * @param {function} onClick - Resme tıklandığında üst bileşendeki modal açma fonksiyonunu tetikler
 */
const ImageCard = ({ data, onClick }) => {
  // Unsplash'ten gelen verileri parçalıyoruz (Destructuring)
  const { urls, alt_description } = data;

  return (
    <div className={css.card} onClick={onClick}>
      <img
        className={css.image}
        src={urls.small} // Galeri görünümü için küçük boyutlu resim
        alt={alt_description || "Unsplash Image"} // Erişilebilirlik için açıklama
      />
    </div>
  );
};

export default ImageCard;