import { useSelector } from 'react-redux';
import './App.css';
import MainRoutes from './Pages/MainRoutes';
import Footer from './components/Footer';
// import Footer from './components/Footer';
// import Login from './components/Login';
import Navbar from './components/Navbar';
import AdminNavbar from './components/User/AdminNavbar';
import { ChakraProvider } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useDarkMode } from "./useDarkMode";
import Toggling from './Toggling';
// import TOGGLEING from "./TOGGLEING";

function App() {
  const [theme, toggleTheme] = useDarkMode("light");
  const adminAuth= useSelector(state=> state.authReducer.isAuthAdmin)
  return (
  
    <div className="App">
     
    <Navbar/>
  


      
      <div className='mt-[0.5%]'>
      <MainRoutes/>
      </div>
      <Footer/>
    </div>
    
  );
}

export default App;
