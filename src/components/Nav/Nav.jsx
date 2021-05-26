import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import {useSelector} from 'react-redux';
import {FiMenu, 
  FiChevronRight,
  FiUser,
  FiLogOut,
  FiArrowLeft
} from "react-icons/fi";
import {BiBarChartAlt2, BiHeartCircle, BiCapsule, BiInfoCircle} from "react-icons/bi";
import { CSSTransition } from 'react-transition-group';

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

  const [activeMenu, setActiveMenu] = useState('main'); // settings, about userpage, logout
  const [menuHeight, setMenuHeight] = useState(null); 

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return(
      <a className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>      
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>

      <CSSTransition 
      in={activeMenu === 'main' } 
      unmountOnExit 
      timeout={500} 
      classNames="menu-primary"
      onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<FiUser />}
            >
              <Link to="/user">
                {/* <a href="/user" className="user"> */}
                  <h4 className="link-header">User Page</h4>
            
                {/* </a>  */}
              </Link>
          </DropdownItem>

        {/* <Link to="/drugstatistics"> */}
          <DropdownItem
            leftIcon={<BiCapsule />}
            rightIcon={<FiChevronRight />}
            goToMenu="drug-usage">
              <h4 className="link-header">Drug Usage</h4>
          </DropdownItem>
        {/* </Link> */}

        {/* <Link to="/demographics"> */}
          <DropdownItem
            leftIcon={<BiBarChartAlt2 />}
            rightIcon={<FiChevronRight />}>
              <h4 className="link-header">Demographics</h4>
          </DropdownItem>
        
        {/* </Link>   */}

        {/* <Link to="/healthstatistics"> */}
          <DropdownItem
            leftIcon={<BiHeartCircle />}
            rightIcon={<FiChevronRight />}>
              <h4 className="link-header">Health</h4>
          </DropdownItem>
        {/* </Link>   */}

        {/* <Link to="/about"> */}
          <DropdownItem
            leftIcon={<BiInfoCircle />}
            rightIcon={<FiChevronRight />}>
              <h4 className="link-header">About</h4>
            
          </DropdownItem>
        {/* </Link> */}
        
          <DropdownItem
            leftIcon={<FiLogOut />}>
              <h4 className="link-header">Log Out</h4>
            
          </DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition 
      in={activeMenu === 'drug-usage' } 
      unmountOnExit 
      timeout={500} 
      classNames="menu-secondary"
      onEnter={calcHeight}
      >
        <div className="menu">
        <DropdownItem leftIcon={<FiArrowLeft />} goToMenu="main"/>
          <DropdownItem
            leftIcon={<FiUser />}
            >
              <Link to="/user">
                {/* <a href="/user" className="user"> */}
                  <h4 className="link-header">Dashboard</h4>
            
                {/* </a>  */}
              </Link>
          </DropdownItem>

          </div>
        </CSSTransition>
    </div>
  )
}
export default Nav;
