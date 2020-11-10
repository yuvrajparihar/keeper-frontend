import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  const location = useLocation();
  const history = useHistory();

  function logOut(){
    window.sessionStorage.removeItem("jwtToken");
    history.push("/");
  }
  
  return (
    <header>
      <h1 className="y">
        <HighlightIcon />
        Keeper
      </h1>
     {location.pathname==="/home"&& <button className="y mail" onClick={logOut} >Logout</button>}
    </header>
  );
}

export default Header;
