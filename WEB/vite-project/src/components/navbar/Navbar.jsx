import { Link } from "react-router-dom";
import { logoutApi } from "../../services/api-service";
import { useAuthContext } from "../../contexts/auth-context";

function Navbar() {
  const { user, onLogout } = useAuthContext();

  function logout() {
    logoutApi().then(() => {
      onLogout();
    });
  }

  const toggleDropdown = () => {
    const dropdown = document.getElementById("userDropdown");
    dropdown.classList.toggle("hidden");
  };

  return (
    <nav className="bg-transparent dark:bg-gray-900 w-full z-20 top-0 left-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://e7.pngegg.com/pngimages/26/116/png-clipart-netflix-logo-netflix-television-show-streaming-media-film-netflix-logo-television-text-thumbnail.png"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
            Youflix
          </span>
        </a>
        <div className="flex md:order-2 items-center relative">
          {user ? (
            <div className="flex flex-row items-center relative">
              {user.name && (
                <span className="text-white mr-2">Hola, {user.name}</span>
              )}
              {user.avatar ? (
                // Mostrar avatar personalizado si está disponible
                <img
                  id="avatarButton"
                  type="button"
                  onClick={toggleDropdown}
                  className="w-10 h-10 me-5 rounded-full cursor-pointer"
                  src={user.avatar}
                  alt="User dropdown"
                />
              ) : (
                // Mostrar avatar predeterminado si no hay avatar personalizado
                <img
                  id="avatarButton"
                  type="button"
                  onClick={toggleDropdown}
                  className="w-10 h-10 me-5 rounded-full cursor-pointer"
                  src="/no-avatar.jpg"
                  alt="User dropdown"
                />
              )}

              {/* Dropdown menu */}
              <div
                id="userDropdown"
                className="mt-5 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-full left-0 w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>{user.name} {user.surname}</div>
                  <div className="font-medium truncate">{user.email}</div>
                </div>
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    onClick={logout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Cerrar sesión
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              type="Link"
              className="text-white bg-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Inicia sesión
            </Link>
          )}
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
    </nav>
  );
}

export default Navbar;
