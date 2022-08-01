import React from "react";
import Polygon from "../../../imgs/Polygon.png"; 
import './style.css';



function Users(props) {
    return(
        <div className="users">
            {props.children}
            <span>{props.Nums}</span>
        </div>
    )
}

export default Users;