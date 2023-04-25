import { Container, Image } from "./Cart.styled";
import cardimage from "../../assets/cardimage.png";

const Card = () => {
  return (
    <>
      <Container>
        <Image src={cardimage} alt="picture" />
      </Container>
    </>
  );
};

export default Card;
