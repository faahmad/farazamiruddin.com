import React from "react"
import { Styled } from "theme-ui"

export default function Bio() {
  return (
    <Styled.div>
      <Styled.a href="https://twitter.com/farazamiruddin">
        @farazamiruddin
      </Styled.a>
      <Styled.div style={{ marginTop: "8px", marginBottom: "4px" }}>opinions on react, firebase, and  products.</Styled.div>
      <Styled.div>work at ubereats | instructor on eggheadio | host of retrospective</Styled.div>
    </Styled.div>
  )
}   
