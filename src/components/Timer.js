import React from "react";
import styled from "styled-components";
import moment from "moment";

const TimerWrapper = styled.div`
  max-width: 380px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 155px;
  height: 155px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0.5em 1em;
  background: rgba(0, 0, 0, 0.3);
  -webkit-backdrop-filter: blur(10px);
  overflow: hidden;
`;

const NumberStyling = styled.span`
  font-size: 3em;
  line-height: 1;
  color: #fff;
  padding-bottom: 0.25em;
`;
const TimeUnit = styled.span`
  font-size: 12px;
  line-height: 1;
  color: #fff;
  text-transform: uppercase;
`;

const completionDate = `11/01/2018`;

class Timer extends React.Component {
  state = {
    milliSecondsRemaining: moment(new Date(`12/01/2018`)).diff(new Date())
  };
  componentDidMount() {
    this.startTimer();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  timer = null;
  startTimer() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.setState({
          milliSecondsRemaining: this.state.milliSecondsRemaining - 1000
        });
      }, 1000);
    }
  }
  render() {
    const duration = moment.duration(this.state.milliSecondsRemaining);
    return (
      <TimerWrapper>
        <Circle>
          <NumberStyling>{duration.days()}</NumberStyling>
          <TimeUnit>Days</TimeUnit>
        </Circle>

        <Circle>
          <NumberStyling>{duration.get(`hours`)}</NumberStyling>
          <TimeUnit>Hours</TimeUnit>
        </Circle>

        <Circle>
          <NumberStyling>{duration.get(`minutes`)}</NumberStyling>
          <TimeUnit>Minutes</TimeUnit>
        </Circle>

        <Circle>
          <NumberStyling>{duration.get(`seconds`)}</NumberStyling>
          <TimeUnit>Seconds</TimeUnit>
        </Circle>
      </TimerWrapper>
    );
  }
}

export default Timer;
