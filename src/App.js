import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import { Routes, Route} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} exact></Route>
      <Route path='/signup' element = {<Signup/>}/>
      <Route path='/login' element = {<Signin/>}/>
    </Routes>
    </>
  );
}

export default App;
