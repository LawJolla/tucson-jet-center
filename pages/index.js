import React from "react"
import styled from "styled-components"
import { Parallax, ParallaxLayer } from "react-spring/dist/addons.cjs.js"
import { config, animated } from "react-spring"
import PaperPlane from "../src/icons/paperPlane"
import { Head } from "next/dist/server/document"
import Timer from "../src/components/Timer"
import Weather from "../src/components/Weather"
import useWindowScrollPosition from "../src/hooks/useWindowScrollPosition"
import FuelPrices from "../src/components/FuelPrices"
import Maintenance from "../src/components/Maintenance"

const Wrapper = styled.div``

const HeroStyled = styled(animated.div)`
  display: grid;

  margin: auto;
  grid-template-rows: ${p => p.theme.spacing.ten}px max-content;
  grid-row-gap: ${p => p.theme.spacing.eleven}px;
  font-size: ${p => p.theme.spacing.six}px;
  color: hsl(${p => p.theme.primary.nine});
  font-weight: ${p => p.theme.weight.heavy};
  opacity: ${p => (p.hide ? 0 : 1)};
  max-width: ${p => p.theme.maxWidth}px;
`

const Nav = styled.div`
  align-self: end;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0 ${p => p.theme.spacing.eight}px;
`

const CTAWrapper = styled.div`
  padding: 0 ${p => p.theme.spacing.eight}px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: ${p => p.theme.spacing.nine}px;
  max-height: calc(60vh - ${p => p.theme.spacing.ten}px);
`

const Logo = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  align-items: end;
`

const Links = styled.div`
  display: grid;
  grid-auto-columns: min-content;
  grid-auto-flow: column;
  grid-gap: ${p => p.theme.spacing.eight}px;
  text-transform: uppercase;
  font-size: ${p => p.theme.spacing.five}px;
`

const CTA = styled.div`
  display: grid;
  font-size: ${p => p.theme.spacing.six}px;
  grid-row-gap: ${p => p.theme.spacing.nine}px;
`

const Message = styled.div`
  display: grid;
  grid-row-gap: ${p => p.theme.spacing.eight}px;
  color: hsl(${p => p.theme.primary.six});
  font-weight: ${p => p.theme.weight.normal};
`

const Button = styled.button`
  padding: ${p => p.theme.spacing.four}px ${p => p.theme.spacing.five}px;
  border-radius: ${p => p.theme.radius.rounded}px;
  background: hsl(${p => p.theme.primary.one});
  color: hsl(${p => p.theme.primary.nine});
  font-weight: ${p => p.theme.weight.heavy};
  max-width: ${p => p.theme.spacing.twelve}px;
  font-size: ${p => p.theme.spacing.five}px;
`

const PlaneDrawing = styled.div`
  position: relative;
  & img {
    position: absolute;
    opacity: 0.8;
    top: -64px;
    right: 0;
    width: 90%;
    max-width: 400px;
    transform: rotate(14deg);
    filter: drop-shadow(0 15px 25px hsla(${p => p.theme.primary.ten}, 0.3))
      drop-shadow(9px 5px 10px hsla(${p => p.theme.primary.seven}, 0.65));
  }
`

const PaddingRow = styled.div``
const Main = styled(animated.div)`
  background: hsl(${p => p.theme.neutral.one});
  height: 30vh;
  width: 100%;
  position: relative;
`

const Clouds = styled.div`
  width: 100%;
  position: absolute;
  top: -10vh;
  left: 0;
  max-height: 30vh;
  > img {
    max-height: 20vh;
  }
`

const Logos = styled.div``

const FuelPrice = styled.div``

const More = styled.div`
  width: 100%;
  height: 3000px;
  background: hsl(${p => p.theme.neutral.one});
`
const ParallaxContainer = styled.div`
  position: absolute;
  width: 100%;
  transition: transform 0.1s;
`
const Index = () => {
  const { y } =
    typeof window !== "undefined" ? useWindowScrollPosition() : { x: 0, y: 0 }

  return (
    <>
      <Parallax pages={4} config={config.stiff}>
        <ParallaxLayer
          factor={0.5}
          speed={-0.3}
          style={{ background: "white" }}
        >
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer offset={0.8}>
          <Main>
            <Clouds>
              <img src="../static/clouds_banner_long.png" />
            </Clouds>
          </Main>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <Logos>Logos</Logos>
          <FuelPrices />
          <Maintenance />
          <More />
        </ParallaxLayer>
      </Parallax>
    </>
  )
}

const Hero = ({ hide = false }) => (
  <HeroStyled hide={hide}>
    <Nav>
      <span>Tucson Jet Center</span>

      <Links>
        <a>Fuel</a>
        <a>Maintenance</a>
        <a>Facility</a>
      </Links>
    </Nav>
    <CTAWrapper>
      <CTA>
        <Message>
          <span>Twenty years of home-grown service.</span>
          <span>Twenty minute quick turn.</span>
        </Message>
        <Button>Book Now</Button>
      </CTA>
      <PlaneDrawing>
        <img src="../static/plane.png" />
      </PlaneDrawing>
    </CTAWrapper>
    <PaddingRow />
  </HeroStyled>
)

export default Index
