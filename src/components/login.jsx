import React, { useState } from "react";
import { NavLink as Link,useHistory} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Login() {
  
  const [user, setNote] = useState({
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
  const history = useHistory();

  function signIn(event) {

    event.preventDefault();
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: user.username, password: user.password }),
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = data.token;
         window.sessionStorage.setItem("jwtToken",accessToken);
        history.push("/home");
      });
  }

 

  return (
    <div>
    <Header />
    <div className="signin">
      <h3 className="sign">Sign In</h3>
      <form>
        <input name="username" onChange={handleChange} className="input" type="email" placeholder="Email" />
        <input name="password" onChange={handleChange} className="input" type="password" placeholder="Password" />
        <button onClick={signIn} className="button">Sign In</button>
      </form>
      <p className="or">or</p>

        <a className="google" href="http://localhost:5000/auth/google"><div>
          <img className="x" src="google.png" alt="GOOGLE" />
          <p className="x bold"> Google</p>
        </div></a>

      <br />
      <div className="newtokeeper">
        <p className="y">New to Keeper?</p>
        <Link to="/signup">
          <p className="up x y">Signup</p>
        </Link>
      </div>
    </div>
    <Footer/>
     </div>
  );
}

export default Login;

