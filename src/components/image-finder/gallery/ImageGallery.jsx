import ImageGalleryItem from './ImageGalleryItem';
import { useState, useEffect } from 'react';
import React from 'react';
import Button from '../button/Button';
import LoaderCom from '../loader/Loader';
import fetchApi from '../../services/services';

import s from './ImageGallery.module.css';

function ImageGallery({ searchName, onClick }) {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('');
  const [page, setPage] = useState(1);
  const [myRefs] = useState(React.createRef());
  const [name, setName] = useState('');

  useEffect(() => {
    if (!searchName) {
      return;
    }
    if (searchName !== name) {
      setPage(1);
      setImages([]);
    }
    setStatus('load');
    fetchApi(searchName, page).then(image => {
      image.hits[0] = { ...image.hits[0], myRef: myRefs };
      setName(searchName);
      setImages([...images, ...image.hits]);
      scroll(myRefs);
      setStatus('done');
    });
  }, [name, searchName, page]);

  const nextPage = () => {
    setPage(state => state + 1);
  };

  function scroll(elem) {
    elem.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
  }

  return (
    <>
      <ul className={s.gallery}>
        {images.map(img => (
          <ImageGalleryItem
            key={img.id}
            onClick={onClick}
            srs={img.webformatURL}
            alt={img.tags}
            largeImageURL={img.largeImageURL}
            myRef={img.myRef}
          />
        ))}
        {status === 'load' && <LoaderCom />}
      </ul>
      {status === 'done' && (
        <div className={s.button}>
          <Button onClick={nextPage} />
        </div>
      )}
    </>
  );
}

export default ImageGallery;
