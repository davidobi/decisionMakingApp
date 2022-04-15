import './App.css';

function App() {
   const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of  computer',
    options: ['One', 'Two']
  };

  const onFormSubmitHandler = (e) => {
    e.preventDefault(); 
    console.log('form submitted')
  }
  

  return (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p> }
    <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
    <form onSubmit={onFormSubmitHandler}>
      <input type="text" name='option' />
      <button>Add Option</button>
    </form>
  </div>
  );
}

export default App;
