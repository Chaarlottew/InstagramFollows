import Dashboard from './pages/dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Instructions from './pages/instructions'
import './App.css';
function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route
              path="/"
              element={<Dashboard/>}
              exact
            />
        <Route
              path="/instructions"
              element={<Instructions/>}
              exact
            />      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
