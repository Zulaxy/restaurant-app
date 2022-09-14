import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

import {Routes, Route} from 'react-router-dom'

function App() {
  return (<div>
    Hello there
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register'element={<Register/>}/>
      </Routes>

    </div>
  );
}

export default App;
