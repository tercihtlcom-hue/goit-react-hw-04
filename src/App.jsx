import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast'; // Toaster eklemeyi unutma kanka
import fetchImages from './unsplash-api.js';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearch = (newQuery) => {
    if (newQuery === query) return;
    setQuery(newQuery);
    setImages([]); // Yeni aramada listeyi hemen boşaltıyoruz
    setPage(1); 
  };

  useEffect(() => {
    if (!query) return;

    const getImages = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchImages(query, page);

        // Kanka burası çok kritik: 
        // Eğer sayfa 1 ise gelenleri direkt set et, değilse üstüne ekle.
        setImages((prevImages) => 
          page === 1 ? data.results : [...prevImages, ...data.results]
        );
        
        setTotalPages(data.total_pages);
        
        if (data.results.length === 0 && page === 1) {
          toast.error("Üzgünüz, aramanızla eşleşen görsel bulunamadı.");
        }
      } catch {
        setError(true);
        toast.error("Görseller yüklenirken bir hata oluştu!");
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div>
      {/* Toast mesajlarının ekranda görünmesi için Toaster bileşenini ekledim */}
      <Toaster position="top-right" />
      
      <SearchBar onSubmit={handleSearch} />

      {error && <ErrorMessage />}

      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}

      {isLoading && <Loader />}

      {/* Sayfa sonu kontrolü ve yükleme durumu */}
      {images.length > 0 && !isLoading && page < totalPages && (
        <LoadMoreBtn onClick={() => setPage((prevPage) => prevPage + 1)} />
      )}

      <ImageModal
        isOpen={showModal}
        onClose={closeModal}
        selectedImage={selectedImage}
      />
    </div>
  );
}

export default App;