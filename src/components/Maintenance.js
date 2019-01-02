import React from "react"
import styled from "styled-components"
import { Section } from "./elements"
import Wrench from "../icons/wrench"

const StyledMaintenance = styled(Section)`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 1fr));
  grid-auto-flow: column;
`

const LeftImage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 100%;
    height: 100%;
    max-height: 400px;
    max-width: 400px;
    object-fit: cover;
    border-radius: 50%;
    filter: drop-shadow(${p => p.theme.shadow.five});
  }
`
const Maintenance = () => (
  <StyledMaintenance>
    <LeftImage>
      <img
        src={`https://sfo2.digitaloceanspaces.com/wk-prod/tjc/IMG_9553.jpeg`}
      />
    </LeftImage>
    <Card>
      <Header>Maintenance</Header>
      <Bulletpoint />
      <Bulletpoint />
      <Bulletpoint />
    </Card>
  </StyledMaintenance>
)

const Card = styled.div`
  display: grid;
  grid-template-rows: ${p => p.theme.spacing.seven}px max-content max-content max-content;
  grid-row-gap: ${p => p.theme.spacing.eight}px;
  height: 100%;
  font-size: ${p => p.theme.spacing.six}px;
`
const Header = styled.header`
  text-transform: uppercase;
  font-size: ${p => p.theme.spacing.seven}px;
  color: hsl(${p => p.theme.neutral.nine});
`

const StyledBulletpoint = styled.div`
  display: grid;
  grid-template-columns: ${p => p.theme.spacing.seven}px 1fr;
  grid-column-gap: ${p => p.theme.spacing.five}px;
  grid-template-rows: ${p => p.theme.spacing.seven}px 1fr;
`
const Icon = styled.div`
  grid-row: 1 / -1;
  grid-column: 1 / 2;
  opacity: 0.3;
`
const SubHeader = styled.div`
  font-size: ${p => p.theme.spacing.six}px;
  color: hsl(${p => p.theme.neutral.seven});
`
const Content = styled.div`
  font-size: ${p => p.theme.spacing.five}px;
  color: hsl(${p => p.theme.neutral.five});
`
const BulletpointContent = styled.div`
  grid-row: 1 / -1;
  grid-column: 2 / -1;
  display: grid;
  grid-template-rows: ${p => p.theme.spacing.six}px 1fr;
  grid-row-gap: ${p => p.theme.spacing.five}px;
`

const Bulletpoint = () => (
  <StyledBulletpoint>
    <Icon>
      <Wrench />
    </Icon>
    <BulletpointContent>
      <SubHeader>Subheader</SubHeader>
      <Content>Content</Content>
    </BulletpointContent>
  </StyledBulletpoint>
)

export default Maintenance
