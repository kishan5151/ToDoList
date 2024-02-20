import React from "react";
import list from "./Todilist";

const ListComp=(props)=>{

    return(
        <div className="list">
            <button className="delebtn" onClick={()=>{
                props.selectItem(props.id);
            }}>✖</button>
            <p>{props.listname}</p>
        </div>
    )
}

export default ListComp;