import React, { useEffect, useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useHistory} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";


function Home() {
  const history = useHistory();
  const [state, setstate] = useState([{ _id:"",title: "", content: "" }]);
 
  
  useEffect(() => {
    const token = window.sessionStorage.getItem("jwtToken");
    const accessToken = "Bearer " + token;
    fetch("https://my-keeper-server.herokuapp.com/", {
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
    fetch("https://my-keeper-server.herokuapp.com/delete", {
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
    fetch("https://my-keeper-server.herokuapp.com/add", {
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
       <Header/>
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
