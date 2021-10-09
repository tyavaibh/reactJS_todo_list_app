import {Component} from "react";
import List from "./List.jsx"

class ToDo extends Component{

    state={items:[],
           item:""
        }

    

    handleChange=(e)=>{
      this.setState( {item:(e.target.value) })
    }

    handleAdd=()=>{
        let up_items=[...this.state.items,this.state.item]
        this.setState({items:up_items})
        this.setState({item:""});
        
    }

    handleRemove=(work)=>{
        // console.log("clicked",e.target.id);

        
        let fil_items=this.state.items.filter( (el)=>{ 
            
                 return el!==work;
            
        } )

    

        console.log("fil_items",fil_items)

        this.setState({items:fil_items})
    }

    render(){

        console.log(this.state.items);
        return (

        <>
            <div className={"mainContainer"}>

                <div className={"dispBox"}>
                    <input className={"item"} 
                    type="text" 
                    placeholder="add your tasks here..."
                    name="" 
                    id="" 
                    value={this.state.item} 
                    onChange={this.handleChange}/>

                    <button className={"btn"} onClick={this.handleAdd}>Add</button>
                </div>

                <List items={this.state.items} handleRemove={this.handleRemove}/>

            </div>
        </>

        )
    }
}

export default ToDo;