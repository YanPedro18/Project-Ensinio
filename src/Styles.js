/* eslint-disable no-unused-vars */
import { styled, css } from "styled-components";
import img from "../public/Path.png";

export const Title = styled.h1`
  color: #130c25;
  font-size: 20px;
`;
export const Text = styled.p`
  color: #423d51;
  font-size: 16px;
  width: 282px;
  height: 72px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  margin: 0 auto;
`;
export const Section = styled.section`
  width: 100vw;
  background-color: white;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: start;
  margin: 0 auto;
  align-items: center;

  ${({ theme }) => css`
    @media screen and (max-width: 445px) {
      height: auto;
    }
  `}
`;
export const Section_flex = styled.div`
  margin: 0rem 2rem 0rem 2rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: center;

  ${({ theme }) => css`
    @media screen and (max-width: 445px) {
      margin: 7rem 2rem 0rem 2rem;
    }
  `}
`;
export const Image = styled.img`
  width: 40px;
`;

export const OptionsContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  color: #130c25;
`;

export const SelectButton = styled.div`
  display: flex;
  background: linear-gradient(
    90deg,
    #5f41d9 -880.48%,
    rgba(95, 65, 217, 0) 100%
  );
  align-items: center;
  padding: 10px;
  width: 110px;
  transform: translateY();
  cursor: pointer;
  color: #130c25;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;

  &::before {
    content: "";
    position: absolute;
    background-repeat: repeat;
    background-size: cover;
    background-position: center;
    background-image: url(${img});
    transform: translate(2rem, -50%);
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    background-image: black;
    z-index: 999;
  }
`;

export const OptionsList = styled.div`
  position: absolute;
  text-align: left;
  top: 100%;
  color: #130c25;
  width: 120px;
  border-end-start-radius: 1rem;
  border-end-end-radius: 1rem;
  background-color: #cfcfcf;
  padding: 5px;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  color: #130c25;
  padding: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
    color: #130c25;
  }
`;

export const OptionImage = styled.img`
  margin-right: 10px;
`;




