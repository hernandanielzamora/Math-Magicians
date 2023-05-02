import { Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './routes/Home';
import CalculatorPage from './routes/CalculatorPage';
import QuotesPage from './routes/QuotesPage';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quotes" element={<QuotesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
