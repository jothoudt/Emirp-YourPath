import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
import {FiMenu, 
  FiChevronRight,
  FiUser,
  FiLogOut
} from "react-icons/fi";
import {BiBarChartAlt2, BiHeartCircle, BiCapsule, BiInfoCircle} from "react-icons/bi";

function Nav() {
  const user = useSelector((store) => store.user);

  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <Navbar>
    <NavItem icon={<FiMenu/>}>
      <DropdownMenu />
    </NavItem>
  </Navbar>
  );
}

function Navbar(props) {
  return(
    <nav className="navbar">
      <h2>YourPath</h2>
      <ul className="navbar-nav">{props.children}</ul>

     
    </nav>

  )
}

function NavItem(props) {

  const [open, setOpen] = useState(false);
  return(
    <li className="nav-item">
      <a className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

function DropdownMenu () {

  function DropdownItem(props) {
    return(
      <a className="menu-item">
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>      
    );
  }

  return (
    <div className="dropdown">
      <Link to="/user">
        <DropdownItem
          leftIcon={<FiUser />}
          rightIcon={<FiChevronRight />}>
              <h4 className="link-header">User Page</h4>
        </DropdownItem>
      </Link>

      <Link to="/drugstatistics">
        <DropdownItem
          leftIcon={<BiCapsule />}
          rightIcon={<FiChevronRight />}>
            <h4 className="link-header">Drug Usage</h4>
        </DropdownItem>
      </Link>

      <Link to="/demographics">
        <DropdownItem
          leftIcon={<BiBarChartAlt2 />}
          rightIcon={<FiChevronRight />}>
            <h4 className="link-header">Demographics</h4>
        </DropdownItem>
      
      </Link>  

      <Link to="/healthstatistics">
        <DropdownItem
          leftIcon={<BiHeartCircle />}
          rightIcon={<FiChevronRight />}>
            <h4 className="link-header">Health</h4>
        </DropdownItem>
      </Link>  

      <Link to="/about">
        <DropdownItem
          leftIcon={<BiInfoCircle />}
          rightIcon={<FiChevronRight />}>
            <h4 className="link-header">About</h4>
           
        </DropdownItem>
      </Link>
      
        <DropdownItem
          leftIcon={<FiLogOut />}>
            <h4 className="link-header">Log Out</h4>
           
        </DropdownItem>
    </div>
  )
}
export default Nav;
