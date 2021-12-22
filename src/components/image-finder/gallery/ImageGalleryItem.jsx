import PropTypes from 'prop-types';
import s from './ImageGalleyItem.module.css';

const ImageGalleryItem = ({ srs, alt, onClick, largeImageURL, myRef}) => {
  return (
      <>
    {myRef ? (
        <li 
        ref={ myRef}  
        className={s.item} 
        onClick={() => onClick(largeImageURL, alt)}>
        <img 
        className={s.image} 
        src={srs} 
        alt={alt} 
        loading="lazy"/>
      </li>
):( 
<li 
className={s.item} 
onClick={() => onClick(largeImageURL, alt)}>
  <img 
  className={s.image} 
  src={srs} alt={alt} 
  loading="lazy"/>
</li>
    )}
    </>
  );
}

ImageGalleryItem.propTypes = {
    srs: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    myRef: PropTypes.object,
  };

export default ImageGalleryItem;
