import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar/navbar';
import Footer from './Components/Footer/footer';
import SideNavbarDoc from './Components/SideNavbar/SideNavbarDoc';
import Main from './Components/Main/main';
import ChooseForm from './Components/Chooseform/ChooseForm';
import Document from './Components/Document/Document';
import Form17 from './Components/Form17/Form17';
import OS from './Components/OS/OS';
import PSI from './Components/PSI/PSI';
import Property from './Components/Property/Property';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route path="/document" element={<Document/>}></Route>
          <Route path="/statement" element={<ChooseForm/>}></Route> 
          <Route path="/form17" element={<Form17/>}></Route>
          <Route path="/os" element={<OS/>}></Route>
          <Route path="/psi" element={<PSI/>}></Route>
          <Route path="/property" element={<Property/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

