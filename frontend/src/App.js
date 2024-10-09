import './App.css';

// COMPONENTS
import Navbar from './components/Navbar';
import Board from './components/Board';
import Footer from './components/Footer';

// CONTEXT
import { FinancialDataProvider } from './Contexts/FinancialContext';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FinancialDataProvider>
        <Board />
      </FinancialDataProvider>
      <Footer />
    </div>
  );
}

export default App;
