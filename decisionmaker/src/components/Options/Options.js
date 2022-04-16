import React from "react";
import Option from "./Option/Option";

const Options = (props) => (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>
          <button 
            className="button button--link"
            onClick={props.deleteOptionshandler}
          >
              Remove all
          </button>
        </div>
        
        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p> }
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