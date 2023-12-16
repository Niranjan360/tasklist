import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Taskdetails from './components/Taskdetails';
import Add from './components/Add';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:tid' element={<Taskdetails/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

