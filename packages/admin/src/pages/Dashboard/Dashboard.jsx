import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';

function Dashboard() {

  return(
    <React.Fragment>
      <Header title="Dashboard" />
      <p>This is a child component</p>
    </React.Fragment>
  )
}

export default Dashboard;