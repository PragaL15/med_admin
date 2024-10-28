import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import Dashboard from './components/sidebar'; 
import 'primereact/resources/themes/lara-light-indigo/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeicons/primeicons.css'; 


function App() {
  return (
    <PrimeReactProvider>
      <BrowserRouter>
      <Dashboard /> 
      </BrowserRouter>
    </PrimeReactProvider>
  );
}

export default App;