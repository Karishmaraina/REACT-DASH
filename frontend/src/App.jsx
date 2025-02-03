import { Route, Routes, } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import { Button } from '@chakra-ui/react';

function App() {
  return (
    <>
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Add more routes as needed */}
      <Route path="*" element={<div></div>} />
    </Routes>
    <Button>Hello</Button>
    </>
    
  );
}

export default App;