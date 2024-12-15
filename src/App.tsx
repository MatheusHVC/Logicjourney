import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';

export function App() {
  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </main>
  );
}