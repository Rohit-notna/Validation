import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormValidation from './Pages/FormValidation';
import Table from './Pages/Table';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormValidation/>}/>
       <Route path="/table" element={<Table/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
