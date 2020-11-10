import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Home from "./Home";
import queryString from "query-string";

// https://my-keeper-server.herokuapp.com/

function App() {
 

  const [jwtToken, setToken] = useState();

 
  // console.log(jwtToken);

  return (
    <div id="page-container">
      <div id="content-wrap">
       
        <Router>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
   
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
