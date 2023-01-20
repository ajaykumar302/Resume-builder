import { BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Header/Navbar';
import Home from './Components/Home/Home';
import Resume from './Components/Resume/Resume';
import Editor from './Components/Editor/Editor';
import Form from './Components/Form/Form';
import About from './Components/About';

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/editor' element={<Editor/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/aboutus' element={<About/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
