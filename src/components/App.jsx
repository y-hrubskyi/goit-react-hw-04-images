import { useEffect, useState } from 'react';

import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Placeholder } from './Placeholder/Placeholder';
import { LoadMoreBtn } from './LoadMoreBtn/LoadMoreBtn';

import { fetchImages, per_page } from 'services/api';

import { AppWrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(null);
  const [loadMore, setLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async (query, page) => {
      setIsLoading(true);

      try {
        const data = await fetchImages(query, page);
        const loadMore = page * per_page < data.totalHits;

        setImages(prevState => [...prevState, ...data.hits]);
        setLoadMore(loadMore);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(query, page);
  }, [query, page]);

  const searchFormSubmit = searchQuery => {
    if (query === searchQuery) {
      return;
    }

    setQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const incrementPage = () => {
    setPage(prevState => prevState + 1);
  };

  const isEmptyResults = query && !error && !isLoading && !images.length;
  const isNeedLoadMore = !isLoading && loadMore;

  return (
    <AppWrapper>
      <GlobalStyle />

      <SearchBar onSubmit={searchFormSubmit} />
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
      {isNeedLoadMore && <LoadMoreBtn onClick={incrementPage} />}
    </AppWrapper>
  );
};
