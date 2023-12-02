import { Button } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onLoadMore }) => {
  return <Button onClick={onLoadMore}>Load More</Button>;
};
