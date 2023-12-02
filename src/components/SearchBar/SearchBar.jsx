import toast from 'react-hot-toast';
import { Searchbar, Form, Button, IconSearch, Input } from './SearchBar.styled';

export const SearchBar = ({ onSubmit, isLoading }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const query = e.target.elements.query.value.trim();
    if (query === '') {
      toast.error('Enter search query!');
      return;
    }

    onSubmit(query);
  };

  return (
    <Searchbar>
      <Form onSubmit={handleSubmit}>
        <Button type="submit" disabled={isLoading} aria-label="search">
          <IconSearch />
        </Button>

        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Searchbar>
  );
};
