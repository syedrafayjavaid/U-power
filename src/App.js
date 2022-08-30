
import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from './views/Welcome';
import StatusGraph from './components/StatusGraph';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
    </Routes>

  );
}

export default App;
