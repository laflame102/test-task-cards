import { useEffect, useState } from "react";
import { Container } from "./Tweets.styled";
import CardsList from "../../components/CardsList/CardsList";
import { getUserInfo } from "../../services";
import BackBtn from "../../components/BackBtn/BackBtn";

const Tweets = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUserInfo();
      setUsers(response);
    };
    fetchUser();
  }, []);

  return (
    <Container>
      <BackBtn />
      <CardsList users={users} />
    </Container>
  );
};

export default Tweets;
