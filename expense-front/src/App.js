import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import LoginPage from './components/LoginComponent/LoginPage';
import RegisterUser from './components/LoginComponent/RegisterUser';
import AdminMenu from './components/LoginComponent/AdminMenu';
import CustomerMenu from './components/LoginComponent/CustomerMenu';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/Register' element={<RegisterUser /> }/>
        <Route path='/AdminMenu' exact element={<AdminMenu/>}/>
        <Route path='/CustomerMenu' element={<CustomerMenu/>}/>
      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
