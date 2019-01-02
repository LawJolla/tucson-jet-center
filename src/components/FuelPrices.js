import React from "react"
import { Query } from "react-apollo"
import gql from "graphql-tag"
import styled from "styled-components"
import { Section } from "./elements"

const GET_FUEL_PRICES = gql`
  query getFuelPrices {
    fuelPrices {
      id
      name
      price
    }
  }
`

const GetFuelPricesContainer = ({ children }) => (
  <Query query={GET_FUEL_PRICES}>
    {fuelPrices => {
      if (fuelPrices.loading) return null
      if (fuelPrices.error) return null
      if (!fuelPrices.data) return null
      return children(fuelPrices)
    }}
  </Query>
)

const FuelPricesWrapper = styled(Section)`
  display: grid;
  width: 100%;
  justify-content: center;
  grid-column-gap: ${p => p.theme.spacing.nine}px;
  grid-template-columns: repeat(2, 300px);
  background: hsl(${p => p.theme.neutral.one});
`
const FuelPrices = ({ data: { fuelPrices } }) => (
  <FuelPricesWrapper>
    {fuelPrices.map(f => (
      <FuelCard fuel={f} />
    ))}
  </FuelPricesWrapper>
)

const StyledFuelCard = styled.div`
  background: white;
  padding: ${p => p.theme.spacing.seven}px ${p => p.theme.spacing.seven}px;
  color: hsl(${p => p.theme.neutral.five});
  font-size: ${p => p.theme.spacing.six}px;
  border-radius: ${p => p.theme.radius.rounded}px;
  box-shadow: ${p => p.theme.shadow.three};
  display: grid;
  grid-row-gap: ${p => p.theme.spacing.six}px;
  text-align: center;
`

const Header = styled.header``
const Price = styled.div``
const DollarSign = styled.span``
const FuelPrice = styled.span`
  color: hsl(${p => p.theme.neutral.nine});
  font-size: ${p => p.theme.spacing.eight}px;
`
const Units = styled.span``

const fuelHeaderDisplay = {
  AvGas: "100LL",
  JetA: "Jet-A"
}
const FuelCard = ({ fuel }) => (
  <StyledFuelCard>
    <Header>{fuelHeaderDisplay[fuel.name]}</Header>
    <Price>
      <DollarSign>$</DollarSign>
      <FuelPrice>{(fuel.price / 100).toFixed(2)}</FuelPrice>
      <Units> / gal</Units>
    </Price>
  </StyledFuelCard>
)

export default () => (
  <GetFuelPricesContainer>
    {fuelPrices => <FuelPrices {...fuelPrices} />}
  </GetFuelPricesContainer>
)
