import { useState, useEffect } from "react";
import { Container, Image, Logo, LogoWrapper, Text } from "./Card.styled";
import cardimage from "../../assets/cardimage.png";
import ActiveBtn from "../ActiveBtn/ActiveBtn";
import InactiveBtn from "../InactiveBtn/InactiveBtn";
import { updateUser } from "../../services";

const Card = ({ user: { user, followers, tweets, avatar, id } }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [followerCount, setFollowerCount] = useState(followers);

  useEffect(() => {
    const storedFollowState = localStorage.getItem(`followState_${id}`);
    if (storedFollowState) {
      setIsFollowing(JSON.parse(storedFollowState));
    }
  }, [id, isFollowing]);

  const handleFollowClick = async () => {
    const newIsFollowing = !isFollowing;
    setIsFollowing(newIsFollowing);
    setFollowerCount(newIsFollowing ? followerCount + 1 : followerCount - 1);

    const updatedUser = {
      ...user,
      followers: newIsFollowing ? followers + 1 : followers - 1,
    };

    updateUser(id, updatedUser);
    localStorage.setItem(`followState_${id}`, JSON.stringify(newIsFollowing));
  };

  return (
    <>
      <Container>
        <Image src={cardimage} alt="picture" />
        <LogoWrapper>
          <Logo src={avatar} alt="logo" />
        </LogoWrapper>
        <Text>{tweets} tweets</Text>
        <Text>
          {new Intl.NumberFormat("en-US").format(followerCount)}&nbsp;followers
        </Text>
        {isFollowing ? (
          <ActiveBtn onClick={handleFollowClick} />
        ) : (
          <InactiveBtn onClick={handleFollowClick} />
        )}
      </Container>
    </>
  );
};

export default Card;
