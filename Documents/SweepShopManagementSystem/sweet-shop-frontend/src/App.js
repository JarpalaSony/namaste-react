import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './auth/SignIn';
import Register from './auth/Register';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Sweet from "./pages/Sweets";
import AddSweetForm from './pages/AddSweetForm';
function App() {
  return (
    <AuthProvider>  {/* ✅ Wrap entire app */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sweets" element={<Sweet/>}/>
          <Route path="/add-sweet" element={<AddSweetForm/>}/>
          <Route path="/edit-sweet/:id" element={<AddSweetForm />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
