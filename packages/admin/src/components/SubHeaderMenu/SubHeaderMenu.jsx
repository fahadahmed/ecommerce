import React from 'react';
import styled from '@emotion/styled';

function SubHeaderMenu(props) {
  const SubHeader = styled.div`
    background: #fff;
    padding: 20px;
    box-shadow: 2px 2px 4px 0px rgba(204,204, 204, 1);
    display: flex;
    flex-direction: row no-wrap;
    justify-content: space-between;
    font-family: 'Roboto Slab', serif;
  `

  return(
    <SubHeader>{props.children}</SubHeader>
  )
}

export default SubHeaderMenu;