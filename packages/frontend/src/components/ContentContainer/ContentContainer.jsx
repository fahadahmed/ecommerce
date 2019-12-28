import React from 'react';
import styled from '@emotion/styled';

function ContentContainer(props) {
  const Container = styled.div`
    padding: 16px;
    display: grid;
    grid-template-columns: 400px 10fr;
  `;

  return(
    <Container>{props.children}</Container>
  )
}

export default ContentContainer;