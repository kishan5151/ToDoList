import React from "react";
import "./App.css"
import { useState } from "react";
import ListComp from "./ListComp";
import list from "./Todilist";

const App=()=>{
  const[listname,setListName]=useState("");
  const[List,setList]=useState(list);

  const saveconti=(event)=>{
    // console.log(event.target.value)
    setListName(event.target.value);
  }

  const saveInObj=()=>{
    // console.log(list)
    // console.log(list)
    setList((olddata)=>{
      return[...olddata,{"listname":listname}]
    })
    setListName("");
  }

  const deleteItem=(id)=>{
   //use filter function
   setList((olddata)=>{
    return olddata.filter((arrEle,index)=>{
      return index != id;
    });
   })
  }

  return(
    <>
      <div className="outtercon">
        <div className="mainInnercon">
          <br/>
          <h1 className="todoHedding">ToDo List</h1>
          <br/>
          <div>
            <input className="textfield"
              type="text"
              onChange={saveconti}
              value={listname}
              placeholder="Add a Items"
            />
            <button className="addbtn" onClick={saveInObj}>+</button>
          </div>
          {
            List.map((val,index)=>{
              return(
                <ListComp key={index}
                id={index}
                  listname={val.listname}
                  selectItem={deleteItem}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App;