import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/Media";

export const Container = styled.div``;
export const Bg = styled.div`
  background-image: url("/img/login-bg-img1.jpg");
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  @media ${breakPoints.mobile} {
    background: none;
  }
  @media ${breakPoints.tablet} {
  }
`;
export const LoginBox = styled.div`
  margin: 100px 0;
  border-radius: 20px;
  width: 800px;
  background-color: #fff;
  padding: 62px 93px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    font-family: "Montserrat Alternates", sans-serif;
    text-align: center;
    font-size: 64px;
    font-weight: 700;
    color: #58bd97;
    margin-bottom: 14px;
  }
  @media ${breakPoints.mobile} {
    padding: 24px 0;
    margin: 0;
    h3 {
      margin-bottom: 16px;
    }
  }
  @media ${breakPoints.tablet} {
  }
`;
export const Lavel = styled.div``;
export const Form = styled.form`
  border-bottom: 1px solid #cacaca;
  padding: 0 137px 26px;
  @media ${breakPoints.mobile} {
    padding: 0 21px 0;
  }
  @media ${breakPoints.tablet} {
  }
`;
export const FormLabel = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  color: #000000;
  margin-top: 18px;
`;
export const ErrorMsg = styled.div`
  color: red;
  font-size: 14px;
  padding-top: 5px;
  height: 14px;
`;
export const checkBox = styled.div`
  display: flex;
  margin-bottom: 28px;
  margin-top: 18px;
  input {
    width: 20px;
    margin-right: 8px;
    height: 20px;
  }
  div {
    font-size: 14px;
  }
`;
export const SubmitBtn = styled.button`
  width: 340px;
  height: 56px;
  border-radius: 100px;
  background-color: #58bd97;
  color: #fff;
  font-weight: 700;
  margin-bottom: 17px;
  border: none;
  transition: all 0.2s ease;
  font-size: 16px;
  cursor: pointer;
  :hover {
    border-color: #a1dac5;
    background: #a1dac5;
  }
  &.google {
    background-color: #2c3131;

    img {
      width: 32px;
      margin-right: 8px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const GoogleBtn = styled.button``;
export const SignUp = styled.div`
  text-align: center;
  padding-top: 37px;
  font-size: 14px;
`;
export const MoveSignUp = styled.span`
  color: #58bd97;
  margin-left: 11px;
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;

export const NonSubmitBtn = styled.button`
  width: 340px;
  height: 56px;
  border-radius: 100px;
  background: transparent;
  color: #58bd97;
  font-size: 16px;
  font-weight: 700;
  padding: 16px 40px;
  border: 2px solid #58bd97;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    color: #ffffff;
    background: #58bd97;
  }
  &.disabled {
    color: #a9a9a9;
    border-color: #cacaca;
    cursor: default;
  }
  &.disabled:hover {
    background: transparent;
  }
`;
