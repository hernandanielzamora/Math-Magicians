import './App.css';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';

function App() {
  return (
    <div className="app">
      <div className="calculator-container">
        <Calculator />
      </div>
      <Quotes />
    </div>
  );
}

export default App;
