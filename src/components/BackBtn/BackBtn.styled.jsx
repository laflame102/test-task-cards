import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 36px;
  width: 160px;
  margin-bottom: 12px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 10px;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  text-decoration: none;
  color: #373737;

  &:hover {
    scale: 1.02;
  }
`;
