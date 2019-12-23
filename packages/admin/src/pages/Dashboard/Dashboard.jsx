import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import ContentContainer from '../../components/ContentContainer/ContentContainer.jsx';

function Dashboard() {

  return(
    <React.Fragment>
      <Header title="Dashboard" />
      <ContentContainer>
      <p>This is a child component</p>
      </ContentContainer>
    </React.Fragment>
  )
}

export default Dashboard;