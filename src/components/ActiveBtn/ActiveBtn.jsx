import { Button } from "./ActiveBtn.styled";

const ActiveBtn = ({ onClick }) => {
  return (
    <Button type="button" onClick={() => onClick()}>
      Following
    </Button>
  );
};

export default ActiveBtn;
