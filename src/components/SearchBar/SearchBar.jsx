import { Searchbar, Form, Button, IconSearch, Input } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const searchQuery = e.target.elements.query.value;
    if (!searchQuery) {
      alert('Enter search query!');
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <Searchbar>
      <Form onSubmit={handleSubmit}>
        <Button type="submit" aria-label="search">
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
