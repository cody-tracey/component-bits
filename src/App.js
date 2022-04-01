import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Components
import Login from './Components/Login/login';
import Register from './Components/Register/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />}/>
      </Routes>
    </Router>
  );
}

export default App;
