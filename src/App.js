import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAllToDo, updateToDo,deleteToDo } from "./utils/HandleApi";
import DisplayTime from "./components/displaytime";
import WelcomeMessage from "./components/welcomeMessage";


function App() {

  const [toDo,setToDo]=useState([])
  const [text,setText]=useState("")
  const[isUpdating,setIsUpdating]=useState(false)
  const [toDoId,setToDoId]=useState("")

  useEffect(()=>{
    getAllToDo(setToDo)
  },[])

  const updateMode = (_id,text) =>{
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo APP</h1>
        <DisplayTime/>
        <div className="top">
        <input 
        type="text"
        placeholder="Add ToDos..."
        value={text}
        onChange={(e)=>setText(e.target.value)}
        />

      
        <div className="add" 
        onClick={isUpdating ? 
        ()=> updateToDo(toDoId,text,setToDo,setText,setIsUpdating) 
        : ()=>addToDo(text,setText,setToDo)}>
          {isUpdating ? "Update":"Add"}</div>
      </div>

      {toDo.length ===0 && <WelcomeMessage ></WelcomeMessage>}

      <div className="list">
        {toDo.map((item)=>
        <ToDo key={item._id} 
        text={item.text}
        updateMode={()=>updateMode(item._id,item.text)}
        deleteToDo={()=>deleteToDo(item._id,setToDo)}
        />
      )}
      </div>
      </div>

      <div className="devloper">
        {/* <h1>Develop By <link Pravesh Misra /></h1> */}
        <h1>Develop By: <a href={"https://www.linkedin.com/in/pravesh-mishra-42802b222/"} target="_blank" rel="noopener noreferrer">{"Pravesh Mishra"}</a></h1>
        
      </div>
     
    </div>

  );
}

export default App;
