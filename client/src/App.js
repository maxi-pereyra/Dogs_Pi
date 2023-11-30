import './App.css';
import { Routes , Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import Form from './Components/Form/Form';
import axios from 'axios';
axios.defaults.baseURL='https://dogs-pi-api.vercel.app/' // 'http://localhost:3001/'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/detail/:id' element={<Details/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
