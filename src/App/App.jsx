import { useEffect, useState } from "react";
import { getUserInfo } from "../services";
import CardsList from "../components/CardsList/CardsList";
import { Container } from "./App.styled";

const App = () => {
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
      <CardsList users={users} />
    </Container>
  );
};

export default App;
