import styled from "styled-components";
import { Head } from "next/dist/server/document";

const BackgroundContainer = styled.div`
  background: url(https://s20532.pcdn.co/files/IMG_1538-1600x960.jpg);
  height: 100vh;
  width: 100vw;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Index = () => (
  <React.Fragment>
    <BackgroundContainer>
      <div className="forecast">
        <script
          type="text/javascript"
          src="https://darksky.net/widget/default/32.2219,-110.9262/us12/en.js?width=100%&height=350&title=Tucson, AZ&textColor=333333&bgColor=transparent&transparency=true&skyColor=333333&fontFamily=Default&customFont=&units=us&htColor=333333&ltColor=C7C7C7&displaySum=yes&displayHeader=yes"
        />
      </div>
      <p>Tucson Jet Center</p>
    </BackgroundContainer>
  </React.Fragment>
);

export default Index;
