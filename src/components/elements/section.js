import React from "react"
import styled from "styled-components"

export const Section = styled.section`
  background: hsl(${p => p.theme.primary.one});
  padding: ${p => p.theme.spacing.ten}px ${p => p.theme.spacing.seven}px;
`
