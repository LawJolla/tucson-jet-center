import React from "react";
import styled from "styled-components";
import { Head } from "next/dist/server/document";
import Timer from "../src/components/Timer";
import Weather from "../src/components/Weather";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
`;
const BackgroundImage = styled.div`
  background-image: url("../static/airport-background.jpg");
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 71%;
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  overflow: hidden;
  padding: 50px 50px 150px 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -3;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    z-index: -2;
    top: 0;
    right: 100%;
    width: 10000px;
    height: 100%;
    background-color: #fff;
    transform-origin: bottom right;
    transform: skewX(156deg);
    @media (max-width: 992px) {
      top: 100%;
      right: 0;
      width: 100%;
      height: 10000px;
      transform-origin: top right;
      transform: skew(180deg, 8deg);
    }
  }
  @media (max-width: 992px) {
    position: relative;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
`;

const Strong = styled.span`
  font-weight: bold;
  color: #555555;
`;

const Left = styled.div`
  @media (max-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
  }
  @media (max-width: 1600px) {
    max-width: 38%;
  }
  max-width: 650px;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
  padding-right: 75px;
  padding-left: 75px;
  padding-bottom: 45px;
  padding-top: 45px;
  @media (max-width: 992px) {
    max-width: 650px;
    min-height: 1000px;
    padding-top: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;

const LogoWrap = styled.div`
  width: 80%;
  img {
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
  }
`;

const ComingSoonWrapper = styled.div`
  p {
    font-size: 2.5em;
    line-height: 1.5;
    color: #555555;
  }
  div {
    font-size: 1.5em;
  }
  a {
    text-decoration: underline;
  }
`;

const Index = () => (
  <Wrapper>
    <BackgroundImage>
      <Timer />
    </BackgroundImage>

    <Left>
      <LogoWrap>
        <img src="http://img.airnav.com/l/TUSRA/gold.gif?v=IDFRD2" alt="LOGO" />
      </LogoWrap>
      <ComingSoonWrapper>
        <p>
          Our website is <Strong>Coming Soon</Strong>!
        </p>
        <div>
          Until then, please check out our{" "}
          <a href="http://www.airnav.com/airport/KTUS/RATLIFF">AirNav</a>
        </div>
      </ComingSoonWrapper>
      <Weather />
    </Left>
  </Wrapper>
);

export default Index;
