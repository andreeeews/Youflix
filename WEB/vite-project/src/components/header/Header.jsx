import Navbar from "../navbar/Navbar";
import "../header/header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="custom-background">
      <div className="custom-background-content">
        <Navbar />
        <div className="flex flex-col items-center justify-center custom-height">
          <h2 className="text-4xl font-extrabold text-white dark:text-white text-center">
            Las series de YouTube más exitosas reunidas aquí. Completamente
            gratis.
          </h2>
          <p className="my-4 text-lg font-bold text-white text-center">
            Entra hoy. Sin suscripción, sal cuando quieras.
          </p>
          <p className="mb-4 text-lg font-bold text-white dark:text-gray-400 text-center">
            ¿Quieres ver algo ya? Escribe tu dirección de correo para crear una
            cuenta.
          </p>
          <Link to="/login"
            type="button"
            className="text-xl  text-white bg-red-700 hover:animate-pulse focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-12 py-4 mt-6 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Empezar
          </Link>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
