import { useState } from 'react';

// importComponent
import Section from './components/image-finder/section/Section';
import Searchbar from './components/image-finder/searchbar/Searchbar';
import ImageGallery from './components/image-finder/gallery/ImageGallery';
import Modal from './components/image-finder/modal/Modal';

// importScripts

function App() {
  const [searchName, setSearchName] = useState('');
  const [modal, setModal] = useState(false);
  const [option, setOption] = useState({});

  const toggleModal = (src, alt) => {
    setModal(!modal);
    setOption({ imageSrc: src, imageAlt: alt });
  };

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
  };

  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      <Section>
        <ImageGallery searchName={searchName} onClick={toggleModal} />
      </Section>
      {modal && (
        <Modal
          src={option.imageSrc}
          alt={option.imageAlt}
          onClose={toggleModal}
        />
      )}
    </>
  );
}

export default App;
