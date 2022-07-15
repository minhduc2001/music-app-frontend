import React from 'react'
import styled from 'styled-components'

function Body() {
  return (
    <Container>
      <div className="container">

      </div>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  .container{
    background-color: #fff;
    width: 100%;
    height: 5000px;
    overflow: auto;
    &::-webkit-scrollbar{
      width: 0.2rem;
      &-thumb{
          background-color: #ffffff39;
          width: 0.1rem;
          border-radius: 1rem;
      }
  }
  
}
`;
export default Body