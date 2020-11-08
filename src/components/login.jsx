import React, { useState } from "react";
import { NavLink as Link } from "react-router-dom";

function Login(props) {
  const [note, setNote] = useState({
    username: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.history.push("/signup")
    // props.onAdd(note);
    // setNote({
    //   username: "",
    // password: ""
    // });
    event.preventDefault();
  }

  return (
    <div className="signin">
      <h3 className="sign">Sign In</h3>
      <form>
        <input name="username" onChange={handleChange} className="input" type="email" placeholder="Email" />
        <input name="password" onChange={handleChange} className="input" type="password" placeholder="Password" />
        <button onClick={submitNote} className="button">Sign In</button>
      </form>
      <p className="or">or</p>

      <Link to="/main">
        <div className="google">
          <img className="x" src="google.png" alt="GOOGLE" />
          <p className="x bold"> Google</p>
        </div>
      </Link>
      <br />
      <div className="newtokeeper">
        <p className="y">New to Keeper?</p>
        <Link to="/signup">
          <p className="up x y">Signup</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;

{
  /* <Link to='/'> <img 
            className="header__logo"
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt=''
            >
            </img>
            </Link> */
}
