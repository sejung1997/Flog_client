import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/Media";

export const Container = styled.div`
  width: 100%;
  background: #e9e9e9;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.mobile} {
    padding-bottom: 64px;
  }
`;
export const InnerWrap = styled.div`
  width: calc(100% - 30px);
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding: 50px 0 70px;
  @media ${breakPoints.tablet} {
    padding: 40px 0 40px;
  }
  @media ${breakPoints.mobile} {
    flex-direction: column;
    padding: 24px 0 50px;
  }
`;
export const LeftBox = styled.div`
  width: 60%;
  height: 100%;
  @media ${breakPoints.tablet} {
    width: 50%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const RightBox = styled.div`
  width: 40%;
  height: 100%;
  @media ${breakPoints.tablet} {
    width: 50%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;
export const Info = styled.div`
  margin-bottom: 50px;
  @media ${breakPoints.mobile} {
    margin-bottom: 24px;
  }
`;
export const Title = styled.h5`
  font-family: "Montserrat Alternates", sans-serif;
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 12px;
`;
export const Sub = styled.p`
  font-size: 0.9rem;
  color: #a9a9a9;
  line-height: 1.5em;
`;
export const ContactUs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 80px;
  @media ${breakPoints.tablet} {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 35px;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 35px;
  }
`;
export const ContactItem = styled.div`
  width: auto;
  height: auto;
  margin-right: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media ${breakPoints.tablet} {
    margin-right: 25px;
    margin-bottom: 15px;
    word-break: keep-all;
  }
  @media ${breakPoints.mobile} {
    margin-right: 25px;
    &:nth-of-type(2) {
      margin-right: 0;
    }
  }
`;
export const ContactIconBox = styled.div`
  width: 48px;
  height: 48px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  @media ${breakPoints.mobile} {
    width: 36px;
    height: 36px;
  }
`;
export const ContactTextBox = styled.div`
  .name {
    font-size: 0.75rem;
    color: #9a9ea6;
    margin-bottom: 5px;
  }
  .contact {
    font-size: 0.9rem;
    color: #626262;
    font-weight: 700;
  }
`;
export const SiteMap = styled.div`
  width: 100%;
  height: auto;
  @media ${breakPoints.tablet} {
    display: none;
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const SiteMapList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  li {
    list-style: none;
    margin-right: 45px;
    cursor: pointer;
    span {
      font-size: 0.9rem;
      color: #a9a9a9;
    }
  }
`;
export const NewsLetterTextBox = styled.div`
  margin-bottom: 30px;
  .title {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 10px;
  }
  .sub {
    font-size: 0.9rem;
    color: #a9a9a9;
    line-height: 1.5em;
    word-break: keep-all;
  }
  @media ${breakPoints.mobile} {
    margin-bottom: 12px;
  }
`;
export const NewsLetterInputBox = styled.div`
  button {
    margin-left: 25px;
    height: 54px;
  }
  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    input {
      width: 100%;
    }
    button {
      min-width: 120px;
    }
  }
  @media ${breakPoints.mobile} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    button {
      min-width: 75px;
      height: 41px;
      margin-left: 10px;
    }
  }
`;
