import React from "react";
import Option from "./Option/Option";

const Options = (props) => (
      <div>
        <button onClick={props.deleteOptionshandler}>Remove all</button>
        {props.options.length === 0 && <p>Please add an option to get started!</p> }
        {
          props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option}
            deleteOptionHandler = {props.deleteOptionHandler} 
          /> ))
        }
        
        </div>
    )


export default Options