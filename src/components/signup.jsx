import React, {useState} from "react"
import{ NavLink as Link} from "react-router-dom"


function Signup(props){

  const [note, setNote] = useState({
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

  function submitNote(event) {
    props.onAdd(note);
    // setNote({
    //   username: "",
    // password: "",
    // confirmPassword: ""
    // });
    event.preventDefault();
  }

    return ( 
       <div className="signin">
         <h3 className="sign">
              Sign Up
         </h3>
       <form>
         <input  name="username" onChange={handleChange} className="input" type="email" placeholder="Email" />
         <input  name="password" onChange={handleChange} className="input" type="password" placeholder="Password" />
         <input  name="confirmPassword" onChange={handleChange} className="input" type="password" placeholder="Confirm Password" />
         <button onClick={submitNote} className="button" >Sign Up</button>
         <p className="or">or</p>

         <Link to="/main">
           <div className="google">
           <img className="x" src="google.png" alt="GOOGLE"/> 
           <p className="x bold"> Google</p>
           </div>
         </Link>
         <br/>
       </form>
       </div>
        
    )
}


export default Signup;



{/* <Link to='/'> <img 
            className="header__logo"
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt=''
            >
            </img>
            </Link> */}