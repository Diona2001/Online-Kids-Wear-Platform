import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import ForgotPassword from './components/ForgotPassword/forgotpassword';
// import ResetPassword from './components/ForgotPassword/resetpassword';
// import VerifyCode from './components/ForgotPassword/verifycode';
function App() {
  return (<>
 

    <Header/>
   <main className='min-h-[calc(120vh-65px)] pt-80'>
   <Outlet/>
   </main>
   <Footer/>
   {/* <Routes>
    <Route path="/forgotpass" element={<ForgotPassword/>}/>
    <Route path="/verifycode" element={<VerifyCode/>}/>
    <Route path="/resetpass" element={<ResetPassword/>}/>
    
   </Routes> */}

  </>
  );
}

export default App;
