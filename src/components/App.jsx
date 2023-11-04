import { Component } from 'react';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Placeholder } from './Placeholder/Placeholder';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

import { fetchImages, per_page } from 'services/api';

import { AppWrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: null,
    loadMore: false,

    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.query;
    const currentQuery = this.state.query;
    const prevPage = prevState.page;
    const currentPage = this.state.page;

    if (prevQuery === currentQuery && prevPage === currentPage) {
      return;
    }

    this.setState({ isLoading: true });

    try {
      const data = await fetchImages(currentQuery, currentPage);
      const loadMore = currentPage * per_page < data.totalHits;

      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        loadMore,
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  searchFormSubmit = query => {
    if (this.state.query === query) {
      return;
    }

    this.setState({ query, images: [], page: 1 });
  };

  incrementPage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { query, images, isLoading, error, loadMore } = this.state;
    const isEmptyResults = query && !error && !isLoading && !images.length;
    const isNeedLoadMore = !isLoading && loadMore;

    return (
      <AppWrapper>
        <GlobalStyle />

        <SearchBar onSubmit={this.searchFormSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <Loader />}
        {isEmptyResults && (
          <Placeholder query={query}>
            No any results by <b>"{query}"</b> request
          </Placeholder>
        )}
        {error && (
          <Placeholder query={query}>Whooops.. {error.message}</Placeholder>
        )}
        {isNeedLoadMore && <LoadMoreBtn onClick={this.incrementPage} />}
      </AppWrapper>
    );
  }
}
