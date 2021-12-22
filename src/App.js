import { Component } from 'react';

// importComponent
import Section from './components/image-finder/section/Section';
import Searchbar from './components/image-finder/searchbar/Searchbar';
import ImageGallery from './components/image-finder/gallery/ImageGallery';
import Modal from './components/image-finder/modal/Modal';

// importScripts

class App extends Component {
  state = {
    searchName: '',
    showModal: false,
    option: {},
  };

  toggleModal = (src, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      option: { imageSrc: src, imageAlt: alt },
    }));
  };

  handleFormSubmit = searchName => {
    this.setState({ searchName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <Section>
          <ImageGallery
            searchName={this.state.searchName}
            onClick={this.toggleModal}
          />
        </Section>
        {this.state.showModal && (
          <Modal
            src={this.state.option.imageSrc}
            alt={this.state.option.imageAlt}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default App;
