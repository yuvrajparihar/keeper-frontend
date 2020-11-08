import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  useHistory,
  HashRouter,
  Redirect,

  withRouter
} from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import queryString from "query-string";
// const axios = require("axios")

// https://my-keeper-server.herokuapp.com/

function App() {
 
  const [state, setstate] = useState([{ title: "", content: "" }]);
  // useEffect(() => {
  //   fetch("http://localhost:5000/")
  //     .then((response) => response.json())
  //     .then((data) => setstate(data));

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);
  // console.log(state)
  useEffect(() => {
    var query = queryString.parse(window.location.search);
    console.log(query.token);
    // const history = useHistory();
    // history.push("/");
  }, []);

  function addNote(newNote) {
    fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((data) => setstate(data));
  }
  // console.log(postId);
  // console.log(state)

  function deleteNote(id) {
    fetch("http://localhost:5000/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((data) => setstate(data));
  }
  const [jwtToken, setToken] = useState();

// const history = useHistory();
  function signIn(user) {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: user.username, password: user.password }),
    })
      .then((response) => response.json())
      .then((data) => {
        const accessToken = "Bearer " + data.token;
        fetch("http://localhost:5000/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            authorization: accessToken,
          },
        })
          .then((response) => response.json())
          .then((data) =>{
            setstate(data)
          //  browserHistory.push("/")
          });
      });
  }
  console.log(state);
  function signUp(user) {
    console.log(user);
    fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({ email: user.username, password: user.password }),
    })
      .then((response) => response.json())
      .then((data) => setToken(data));
  }
  console.log(jwtToken);
  return (
    <div id="page-container">
      <div id="content-wrap">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <Login onAdd={signIn} />
            </Route>
            <Route exact path="/signup">
              <Signup onAdd={signUp} />
            </Route>
            <Route path="/main">
              <CreateArea onAdd={addNote} />

              {state.map((noteItem, index) => {
                return (
                  <Note
                    key={index}
                    id={noteItem._id}
                    title={noteItem.title}
                    content={noteItem.content}
                    onDelete={deleteNote}
                  />
                );
              })}
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

//  const [state,setState]=useState({});

//  axios({
//    method:"get",
//    url:"http://localhost:5000/"
//  })
//   .then(function (response) {
//     // handle success
//     setState(response)
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })

// function handleState(){
//   fetch('http://localhost:5000/')
//   .then(response => response.json())
//   .then(data => setState(data));
// }

// useEffect(() => {
//     // POST request using fetch inside useEffect React hook

//     fetch("http://localhost:5000/delete", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json;charset=utf-8'
//       },
//       body: JSON.stringify({hello:"nathuramf"})
//     } )
//         .then(response => response.json())
//         .then(data => setPostId(data));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);
// // console.log(postId)

{
  /* <Router>
<div className="App">
  
  <Switch>
  <Route path='/login'>
     <Login/>
  </Route>
  <Route path='/checkout'>
      <Header/>
      <Checkout />
    </Route>
  <Route path='/'> 
      <Header/> 
      <Home />
    </Route>
  </Switch>
  
</div>
</Router>  */
}

{
  /* <CreateArea onAdd={addNote} />
    
{state.map((noteItem, index) => {
  return (
    <Note
      key={index}
      id={noteItem._id}
      title={noteItem.title}
      content={noteItem.content}
      onDelete={deleteNote}
    />
  );
})} */
}
