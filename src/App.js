// import logo from './logo.svg';
import './App.css';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  const element = <FontAwesomeIcon icon={faCoffee} />
  return (
    <div className="App">
      <h2 className='p-3 mb-2 bg-primary text-white'>Hello React! {element}</h2>
    </div>
  );
}

export default App;
