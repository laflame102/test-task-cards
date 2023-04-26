import { Button } from "./InactiveBtn.styled";

const InactiveBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={() => onClick()}>
      Follow
    </Button>
  );
};

export default InactiveBtn;
