import ImageGalleryItem from './ImageGalleryItem';
import React, { PureComponent } from 'react';
import Button from '../button/Button';
import LoaderCom from '../loader/Loader';
import fetchApi from '../../services/services'

import s from './ImageGallery.module.css';


class ImageGallery extends PureComponent {
    state = {
      image: [],
      status: '',
      page: 1,
      myRef: React.createRef(),
    };
  
    componentDidUpdate(prevProps, prevState) {
      if (
        prevProps.searchName !== this.props.searchName ||
        prevState.page !== this.state.page
      ) {
          this.setState({ image: [], status: 'load' });
        fetchApi(this.props.searchName, this.state.page)
          .then(image => {
            image.hits[0] = { ...image.hits[0], myRef: this.state.myRef  };
            this.setState({
              image: [...this.state.image, ...image.hits],
              status: 'done',
            });
            this.scroll(this.state.myRef);
          })
      }
    }

    nextPage = () => {
      this.setState({
        page: this.state.page + 1,
      });
    };
  
    scroll = elem => {
      elem.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    };
    render() {
  return (
<>
    <ul className={s.gallery}>
        {this.state.image.map(img => (
              <ImageGalleryItem
                key={img.id}
                onClick={this.props.onClick}
                srs={img.webformatURL}
                alt={img.tags}
                largeImageURL={img.largeImageURL}
                myRef={img.myRef}
              />
            ))}
             {this.state.status === 'load' && (
        <LoaderCom/>
        )}
</ul>
{this.state.status === 'done' &&
<div className={s.button}>
<Button onClick={this.nextPage} />
</div>
    }

</>

  );
    }
};


export default ImageGallery;
