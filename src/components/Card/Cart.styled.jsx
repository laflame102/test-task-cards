import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  z-index: 1;
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding-top: 28px;
`;

export const Image = styled.img`
  margin: 0 auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ebd8ff;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  margin: 0 auto;
  margin-bottom: 26px;

  &::before {
    content: "";
    position: absolute;

    width: 100%;
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
    z-index: -1;
  }
`;

export const Logo = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const Text = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
