import { Bar, Navigation, StyledLink } from "./AppBar.styled";

const AppBar = () => {
  return (
    <Bar>
      <Navigation>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="tweets">Tweets</StyledLink>
      </Navigation>
    </Bar>
  );
};

export default AppBar;
