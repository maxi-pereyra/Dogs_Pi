import './App.css';
import { Routes , Route} from 'react-router-dom';

import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
