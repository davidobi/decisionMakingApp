import './App.css';

function App() {
   const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of  computer'
  }
  return (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
  </div>
  );
}

export default App;
