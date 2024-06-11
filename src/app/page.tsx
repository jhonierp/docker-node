'use client';
import React, { useState } from 'react';

const Alert: React.FC<{ message: string, onClose: () => void }> = ({ message, onClose }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto flex justify-center items-center">
      <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
      </div>
      <div className="relative bg-white rounded-lg p-8 max-w-md">
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4">Alerta</h3>
          <p className="text-gray-700">{message}</p>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={onClose}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username === 'admin' && password === 'admin') {
      setShowAlert(true);
      setTimeout(() => {
        window.location.href = '/inicio';
      }, 1000); 
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="flex h-screen bg-blue-100">
      {showAlert && (
        <Alert
          message="Inicio de sesión exitoso"
          onClose={closeAlert}
        />
      )}
      <div className="hidden md:block md:w-7/12 bg-cover bg-center"
           style={{ backgroundImage: 'url(https://img.freepik.com/foto-gratis/render-3d-fondo-moderno-diseno-plexo_1048-14881.jpg)' }}>
      </div>
      <div className="w-full md:w-5/12 flex items-center justify-center bg-white text-black">
        <div className="w-10/12 sm:w-8/12 md:w-6/12 p-8 rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-8">Login</h1>
          </div>
          <form onSubmit={handleLogin} className="text-center">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Usuario</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Contraseña</label>
              <input
                type="password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="w-full py-2 mt-4 bg-green-500 text-white font-medium rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Ingresar
            </button>
          </form>
          {error && <div className="text-red-500">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;

