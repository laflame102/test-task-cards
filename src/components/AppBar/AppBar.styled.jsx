import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Bar = styled.div`
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
  background-color: #ebd8ff;
  margin-bottom: 24px;
  padding-left: 60px;
  padding-right: 60px;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

export const StyledLink = styled(NavLink)`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #373737;
  text-decoration: none;
  padding-top: 24px;
  padding-bottom: 24px;

  &.active {
    color: #44bd39;
  }
`;
