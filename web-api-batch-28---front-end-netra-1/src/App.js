import './App.css';
import Header from './components/pages/header';
import Footer from './components/pages/footer';
import Body from './components/pages/body';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Header/> 
      <Body/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
