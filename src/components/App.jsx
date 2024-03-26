import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Placeholder } from 'components/Placeholder/Placeholder';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';

import { GlobalStyle } from '../styles/GlobalStyle';
import { Layout } from './App.styled';

import * as API from 'services/api';

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

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const searchQuery = query.slice(query.indexOf('/') + 1);
        const data = await API.fetchImages(searchQuery, page, {});
        const loadMore = page * API.per_page < data.totalHits;

        setImages(prevState => [...prevState, ...data.hits]);
        setLoadMore(loadMore);

        if (page === 1 && data.totalHits) {
          toast.success(`Found ${data.totalHits} results`);
        }
        if (!loadMore && page !== 1) {
          toast.success("That's all");
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const searchFormSubmit = query => {
    setQuery(`${Date.now()}/${query}`);
    setImages([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const searchQuery = query.slice(query.indexOf('/') + 1);
  const isEmptyResults = query && !error && !isLoading && !images.length;
  const isNeedLoadMore = !isLoading && loadMore;

  return (
    <Layout>
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 1500 }} />

      <SearchBar onSubmit={searchFormSubmit} isLoading={isLoading} />
      {images.length > 0 && <ImageGallery images={images} />}
      {isLoading && <Loader />}
      {isEmptyResults && (
        <Placeholder>
          🤷‍♂️ No any results by <b>{searchQuery}</b> request
        </Placeholder>
      )}
      {error && <Placeholder>❌ Whooops.. {error.message}</Placeholder>}
      {isNeedLoadMore && <LoadMoreBtn onLoadMore={handleLoadMore} />}
    </Layout>
  );
};
