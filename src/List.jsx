import {Component} from "react";

class List extends Component{

    
    // state={arr:this.props.items}
    

    render(){

        // console.log("arr",this.props.items)
        
        let arr=this.props.items;  //object de-structuring done 
        // console.log("arr",arr);

        return (

            <>  
                <div className={"listContainer"}>
                    <ul>
                        {arr.map( (work,index)=>{
                            console.log(index)
                            return <>
                                <li key={index}>{work}</li> 
                                <button onClick={()=>{this.props.handleRemove(work)}} 
                                className={"btn_list"}>X</button>
                                <br /><br />

                            </>
                            } )}
                    </ul>
                </div>
                
            </>
        )
    }
}

export default List;