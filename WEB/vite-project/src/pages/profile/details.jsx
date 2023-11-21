import "./details.css";
import { useState } from "react";
import { useAuthContext } from "../../contexts/auth-context";
import { editUser, logoutApi } from "../../services/api-service";

function Details() {
  const { user, onLogout } = useAuthContext();

  function logout() {
    logoutApi().then(() => {
      onLogout();
    });
  }

  const [formData, setFormData] = useState({
    name: user.name,
    surname: user.surname,
    telephone: user.telephone,
    email: user.email,
    avatar: 0,
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (selectedImage) => {
    setFormData({
      ...formData,
      avatar: selectedImage,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editUser(formData, user.id)
      .then((response) => {
        console.log("Usuario actualizado:", response);
      })
      .catch((error) => {
        console.error("Error al actualizar usuario:", error);
      });
  };

  return (
    <div>
      <h1 className="text-white text-7xl text- ">Modificar perfil</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 md:space-y-6"
        action="#"
      >
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Tu nombre
          </label>
          <input
            defaultValue={user.name}
            onChange={handleChange}
            type="name"
            name="name"
            id="name"
            className="bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="surname"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Tu apellido
          </label>
          <input
            defaultValue={user.surname}
            onChange={handleChange}
            type="surname"
            name="surname"
            id="surname"
            className="bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="telephone"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Tu telefono
          </label>
          <input
            defaultValue={user.telephone}
            onChange={handleChange}
            type="telephone"
            name="telephone"
            id="telephone"
            className="bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div>
          <label
            htmlFor="avatar"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Selecciona tu avatar
          </label>
          <div className="flex space-x-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`cursor-pointer rounded-lg border border-gray-300 image-container ${
                  formData.image === index ? "image-selected" : ""
                }`}
                onClick={() => handleImageChange(index)}
              >
                <img
                  src={`/avatar${index}.png`}
                  alt={`Avatar ${index}`}
                  className="image"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-white dark:text-white"
          >
            Password
          </label>
          <input
            placeholder="Nueva contraseña"
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            className="bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required=""
          />
        </div>
        <div className="flex items-start"></div>
        <button
          type="submit"
          onClick={logout}
          className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Modificar datos
        </button>
      </form>
    </div>
  );
}

export default Details;
