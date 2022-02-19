import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//Components
import Login from './Components/Login/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
