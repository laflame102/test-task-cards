import { Container, Image, Logo, LogoWrapper, Text } from "./Cart.styled";
import cardimage from "../../assets/cardimage.png";
import ActiveBtn from "../ActiveBtn/ActiveBtn";

const Card = ({ user: { user, followers, tweets, avatar, id } }) => {
  return (
    <>
      <Container>
        <Image src={cardimage} alt="picture" />
        <LogoWrapper>
          <Logo src={avatar} alt="logo" />
        </LogoWrapper>
        <Text>{tweets} tweets</Text>
        <Text>
          {new Intl.NumberFormat("en-US").format(followers)}
          &nbsp; followers
        </Text>
        <ActiveBtn />
      </Container>
    </>
  );
};

export default Card;
