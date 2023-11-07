import Navbar from "../navbar/Navbar";
import "../header/header.css";

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
          <a
            href="#"
            className="custom-background-button inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline"
          >
            Read more
            <svg
              className="w-3.5 h-3.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
