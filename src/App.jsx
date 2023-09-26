import './App.css';
import Header from './components/Header';
import Participantes from './components/participantes';
import Sobre from './components/Sobre/sobre';

function App() {
  return (
    <div className='father'>
      <Header />
      <Participantes/> 
      <Sobre /> 
    </div>
  );
}

export default App;
