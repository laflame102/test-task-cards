import Card from "../Card/Card";
import { List } from "./CardsList.styled";

const CardsList = ({ users }) => {
  return (
    <>
      <List>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <Card user={user} />
            </li>
          ))}
      </List>
    </>
  );
};

export default CardsList;
