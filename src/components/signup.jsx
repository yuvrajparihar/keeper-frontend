import React, {useState} from "react"
import{ useHistory} from "react-router-dom"
import Header from "./Header";
import Footer from "./Footer";
import validator from 'validator'
// var validator = require("validator")

var url="https://my-keeper-server.herokuapp.com/"
// var url="http://localhost:5000/"

function Signup(){
  const history = useHistory();
  const [user, setNote] = useState({
    username: "",
    password: "",
    confirmPassword: ""
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
  const [matchPass, setPass]= useState("");

  function signUp(event) {
   
    event.preventDefault();
    if(validator.isEmail(user.username)){
      if(user.password.length>5)
      {
        if(user.password===user.confirmPassword){
        fetch(url+"register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({ email: user.username, password: user.password }),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.response){
              setPass("User is already registered");
            }
            else{
              const accessToken = data.token;
              window.sessionStorage.setItem("jwtToken",accessToken);
             history.push("/home");
            }
          });
       }
       else{
         setPass("Password doesn't match");
       }
    }
    else{
      setPass("Password should contain atleast 6 letters");
    }
  }
    else{
      setPass("Enter valid email address");
    }
   

  
  }
  
  
  
    return ( 
     <div>
      <Header />
         <div className="signin">
         <h3 className="sign">
              Sign Up
         </h3>
       <form>
         <input  name="username" onClick={()=>{setPass("")}}  onChange={handleChange} className="input" type="email" placeholder="Email" />
         <input  name="password" onClick={()=>{setPass("")}} onChange={handleChange} className="input" type="password" placeholder="Password" />
         <input  name="confirmPassword" onClick={()=>{setPass("")}} onChange={handleChange} className="input confirm" type="password" placeholder="Confirm Password" />
         <p className="match">{matchPass}</p>
         <button onClick={signUp} className="button signupbutton" >Sign Up</button>
         <p className="or">or</p>

         <a className="google" href="https://my-keeper-server.herokuapp.com/auth/google"><div>
          <img className="x" src="google.png" alt="GOOGLE" />
          <p className="x bold"> Google</p>
        </div></a>

         <br/>
       </form>
       </div>
       <Footer/>
     </div>
        
    )
}


export default Signup;


