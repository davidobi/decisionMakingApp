import React from 'react';
import './App.css';

function App() {

  const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of  computer',
    options: []
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
    }
  }

  const removeAllHandler = () => {
    app.options = [];
  }
  
 const makeDecisionHandler = () => {
   const randomNum = Math.floor(Math.random() * app.options.length);
   const option = app.options[randomNum];
   alert(option)
 }

 let visibility = false;
 const toggleVisibilityHandler = () => {
   visibility = !visibility
 }

  return (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p> }
    <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
    <button disabled={app.options.length === 0} onClick={makeDecisionHandler}>What should i do?</button>
    <button onClick={removeAllHandler}>Remove all</button>
    <ol>
     {
       app.options.map((option) => {
         return <li key={option}>{option}</li>
       })
     }
    </ol>
    <form onSubmit={onFormSubmitHandler}>
      <input type="text" name='option' />
      <button>Add Option</button>
    </form>
     
     <h3>Visibility Toggle</h3>
     <button onClick={toggleVisibilityHandler}>{visibility ? 'Hide details' : 'Show details'}</button>

  </div>
  );
}

export default App;
