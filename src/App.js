import {Component} from "react";
import ToDo from "./ToDo.jsx";
import "./App.css";

class App extends Component{

  render(){

    return(
      <>
        <div><h1 className={"header"}>To-do list Application</h1></div>

        <ToDo/>
        
      </>
    )
  }
}

export default App;