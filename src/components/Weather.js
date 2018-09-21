import React from "react";
import styled from "styled-components";

const WeatherWrapper = styled.div`
  overflow: scroll;
`;

class Weather extends React.Component {
  componentDidMount() {
    this.loadWeather();
  }
  loadWeather = () => {
    const script = document.createElement("script");
    script.src = `https://darksky.net/widget/graph-bar/32.2219,-110.9262/us12/en.js?width=100%&height=300&title=Full Forecast&textColor=333333&bgColor=transparent&transparency=true&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=333333&currentDetailsOption=true`;
    script.async = true;
    script.type = "text/javascript";
    console.log(this.el);
    this.el.appendChild(script);
  };
  render() {
    return (
      <WeatherWrapper
        id="customize-script-container"
        ref={el => (this.el = el)}
      />
    );
  }
}

export default Weather;
