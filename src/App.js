// import logo from './logo.svg';
import './App.css';
import Players from './components/Players/Players';
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header/Header';
// import Team from './components/Team/Team';
import Footer from './components/Footer/Footer';

function App() {
  // const element = <FontAwesomeIcon icon={faCoffee} />
  return (
    <div className="App">
      <Header></Header>
      <Players></Players>
      <Footer></Footer>
    </div>
  );
}

export default App;
