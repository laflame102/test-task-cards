import { Button } from "./LoadMoreBtn.styled";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={() => onClick()}>
      Load More
    </Button>
  );
};

export default LoadMoreBtn;
