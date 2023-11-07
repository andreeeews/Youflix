import Navbar from '../navbar/Navbar'

function Header() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>

      <div className="">
        <h2 className="text-4xl font-extrabold dark:text-white">Las series de youtube más exitosas reunidas aqui. Completamente gratis.</h2>
        <p className="my-4 text-lg text-gray-500">Entra hoy. Sin suscripción, sal cuando quieras.</p>
        <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">¿Quieres ver algo ya? Escribe tu dirección de correo para crear una cuenta.</p>
        <a href="#" className="inline-flex items-center text-lg text-blue-600 dark:text-blue-500 hover:underline">
        Read more
        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
        </a>
      </div>

    </div>
  )
}

export default Header