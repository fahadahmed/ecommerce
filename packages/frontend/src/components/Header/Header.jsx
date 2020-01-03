import React from 'react';
import {Link} from 'react-router-dom';
import Bag from '../../images/shopping_bag.svg';
import User from '../../images/user.svg';

function Header () {

  return(
    <React.Fragment>
      <div style={{ display:"flex", flexDirection: "row nowrap", justifyContent: "flex-end", paddingRight: "20px", paddingLeft: "20px", paddingTop: "10px"}}>
        <div>
          {/*<Link to="/user"><img src={User} alt="User Account" style={{margin: "10px"}}/></Link>*/}
          <Link to="/cart"><img src={Bag} alt="Shopping Bag" style={{margin: "10px"}}/></Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;