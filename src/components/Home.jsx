import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useHistory} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import queryString from "query-string";

function Home() {
  const history = useHistory();
  const [state, setstate] = useState([{ _id:"",title: "", content: "" }]);
  useEffect(() => {
    var query = queryString.parse(window.location.search);
    console.log(query.token);
    if(query.token){
      const accessToken = query.token;
      window.sessionStorage.setItem("jwtToken",accessToken);
      
      history.push("/home");
    }
   
  }, [history]);
  
  useEffect(() => {
    const token = window.sessionStorage.getItem("jwtToken");
    const accessToken = "Bearer " + token;
    fetch("http://localhost:5000/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: accessToken,
      },
    })
      .then((response) => response.json())
      .then((data) => {
       if(data.response){
         history.push("/");
       }
        else{
          setstate(data);
        }
      });
  }, [history]);
  // console.log(state)
  function deleteNote(id) {
    const token = window.sessionStorage.getItem("jwtToken");
    const accessToken = "Bearer " + token;
    fetch("http://localhost:5000/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: accessToken,
      },
      body: JSON.stringify({ id: id }),
    })
      .then((response) => response.json())
      .then((data) => {
        setstate(data)
      });
  }
  function addNote(newNote) {
    const token = window.sessionStorage.getItem("jwtToken");
    const accessToken = "Bearer " + token;
    fetch("http://localhost:5000/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization: accessToken,
      },
      body: JSON.stringify(newNote),
    })
      .then((response) => response.json())
      .then((data) => {
        setstate(data)
      });
  }
 
  // console.log(state)
  return (
    <div>
       <Header loggedIn={logState} />
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
      <Footer />
    </div>
  );
}

export default Home;
