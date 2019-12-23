import React from 'react';
import styled from '@emotion/styled';

function Error(props) {
  const Error = styled.p`
    border: 2px solid #FF0000;
    padding: 10px;
    color: #FF0000;
  `
  return(
    <Error>{props.children}</Error>
  )
}

export default Error;