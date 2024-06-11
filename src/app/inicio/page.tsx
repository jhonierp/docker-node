'use client';
import React, { useState } from 'react';
import './styles/inicio.css';

const Inicio: React.FC = () => {
  const loans = [
    { id: 1, name: 'Juan Pérez', date: '2024-05-01', amount: 1000 },
    { id: 2, name: 'María López', date: '2024-05-15', amount: 1500 },
    { id: 3, name: 'Carlos Ruiz', date: '2024-06-01', amount: 2000 },
    { id: 4, name: 'Ana Gómez', date: '2024-06-05', amount: 2500 },
    { id: 5, name: 'Luis Fernández', date: '2024-06-10', amount: 3000 },
    { id: 6, name: 'Sofía Martínez', date: '2024-06-15', amount: 3500 },
    { id: 7, name: 'Miguel Torres', date: '2024-06-20', amount: 4000 },
    { id: 8, name: 'Laura Sánchez', date: '2024-06-25', amount: 4500 },
    { id: 9, name: 'José Morales', date: '2024-07-01', amount: 5000 },
    { id: 10, name: 'Raquel Vargas', date: '2024-07-05', amount: 5500 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const loansPerPage = 6;
  const indexOfLastLoan = currentPage * loansPerPage;
  const indexOfFirstLoan = indexOfLastLoan - loansPerPage;
  const currentLoans = loans.slice(indexOfFirstLoan, indexOfLastLoan);

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const totalPages = Math.ceil(loans.length / loansPerPage);

  return (
    <div className="home">
      <div className="title-container">
        <img src="https://i.pinimg.com/236x/83/74/b2/8374b29dbd788a4a224b3fc2cb2f858e.jpg" alt="Logo" className="logo" />
        <h1 className="title">Tienda</h1>
      </div>
      <div className="content">
        <form className="form">
          <label className="form-label">
            Nombre:
            <input
              type="text"
              name="name"
              required
              className="form-input"
            />
          </label>
          <label className="form-label">
            Fecha:
            <input
              type="date"
              name="date"
              required
              className="form-input"
            />
          </label>
          <label className="form-label">
            Valor Prestado:
            <input
              type="number"
              name="amount"
              required
              className="form-input"
            />
          </label>
          <button type="submit" className="btn">
            Agregar Préstamo
          </button>
        </form>
        <div className="divider" />
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Valor Prestado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {currentLoans.map((loan) => (
                <tr key={loan.id}>
                  <td>{loan.id}</td>
                  <td>{loan.name}</td>
                  <td>{loan.date}</td>
                  <td>{loan.amount}</td>
                  <td>
                    <button className="btn-edit">Editar</button>
                    <button className="btn-delete">Borrar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination-space" />
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
              <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
              </li>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <li key={page}>
                    <a
                      href="#"
                      className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                        page === currentPage
                         ? 'z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                          : ''
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </a>
                  </li>
                )
              )}
              <li>
              <button
                onClick={handleNextPage}
                disabled={currentLoans.length < loansPerPage}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="w-2.5 h-2.5 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
