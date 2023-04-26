import { useState } from "react";
import Card from "../Card/Card";
import { List } from "./CardsList.styled";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

const CardsList = ({ users }) => {
  const [next, setNext] = useState(3);

  const handleMoreImage = () => {
    setNext(next + 3);
  };

  return (
    <>
      <List>
        {users?.slice(0, next)?.map((user) => (
          <li key={user.id}>
            <Card user={user} />
          </li>
        ))}
      </List>
      {next < users?.length && (
        <LoadMoreBtn onClick={handleMoreImage}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default CardsList;
