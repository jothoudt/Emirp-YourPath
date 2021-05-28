import React from 'react';
import { useDispatch } from 'react-redux';

function LogOutButton({ className, open, setOpen }) {
  const dispatch = useDispatch();
  const handleLogOut = () =>{
    dispatch({ type: 'LOGOUT' });
    setOpen( !open );
  }

  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={className}
      onClick={() => handleLogOut()}
    >
      Log Out
    </button>
  );
}

export default LogOutButton;
