import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';



import About from './components/about';
import Formulario from './components/contact';
import Home from './components/home';
import Personajes from './components/personajes'
import Dragones from './components/dragones'
import NavBarExample from './layouts/navbar';
import Footer from './layouts/footer';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <NavBarExample className="contenedorData" />
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Formulario />} />
            <Route path='personajes' element={<Personajes />} />
            <Route path='dragones' element={<Dragones />} />
            <Route path='*' element={<Navigate replace to="/" />} />
          </Routes>
    
      </BrowserRouter>
      <Footer />

    </div>


  );
}


export default App;
