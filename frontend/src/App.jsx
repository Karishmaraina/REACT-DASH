import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard';

function App() {

  const navigate = useNavigate();

  return (
    <>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={() => <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-semibold text-blue-600 mb-4">404 Not Found</h1>
            <h2 className="text-3xl font-semibold text-blue-600 mb-4">My custom error page</h2>
            <p className="text-lg text-gray-700 mb-6">The page you are looking for does not exist.</p>
          </div>} />
        </Routes>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
