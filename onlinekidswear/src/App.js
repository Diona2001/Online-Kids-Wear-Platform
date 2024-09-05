import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
function App() {
  return (<>
 

    <Header/>
   <main className='min-h-[calc(120vh-65px)] pt-80'>
   <Outlet/>
   </main>
   <Footer/>

  </>
  );
}

export default App;
