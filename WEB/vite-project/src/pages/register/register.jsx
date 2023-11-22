import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { createUser, login } from "../../services/api-service";
import { useAuthContext } from "../../contexts/auth-context";
import "../../components/header/header.css";
import "../register/register.css";
import { useState } from "react";

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);
  const { onLogin } = useAuthContext();

  function handleSignup(formData) {
    createUser(formData)
      .then(() => login(formData))
      .then((user) => onLogin(user))
      .catch((error) => {
        console.error("Error al crear la cuenta:", error);
        setError(error.response.data.message);
        console.log(error);
      });
  }

  return (
    <section className="">
      <div className="custom-background flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="custom-background-content w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="login-color p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
              Crea tu cuenta
            </h1>
            <form
              onSubmit={handleSubmit(handleSignup)}
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
                  {...register("name", { required: true })}
                  type="name"
                  name="name"
                  id="name"
                  className={`${
                    errors.name ? "border-red-600" : ""
                  } bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="Leroy"
                  required=""
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    Necesitas un nombre
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="surname"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Tu apellido
                </label>
                <input
                  {...register("surname", { required: true })}
                  type="surname"
                  name="surname"
                  id="surname"
                  className={`${
                    errors.surname ? "border-red-600" : ""
                  } bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="Jenkins"
                  required=""
                />
                {errors.surname && (
                  <p className="text-red-500 text-xs mt-1">
                    Necesitas unos apellidos
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="telephone"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Tu telefono
                </label>
                <input
                  {...register("telephone", {
                    required: "Este campo es requerido",
                    pattern: {
                      value: /^[0-9]{9}$/,
                      message: "El teléfono debe tener 9 dígitos numéricos",
                    },
                  })}
                  type="tel"
                  name="telephone"
                  id="telephone"
                  className={`${
                    errors.telephone ? "border-red-600" : ""
                  } bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="623236362"
                  required=""
                />
                {errors.telephone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.telephone.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Tu email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  className={`${
                    errors.email ? "border-red-600" : ""
                  } bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  placeholder="example@example.com"
                  required=""
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    Necesitas un email
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className={`${
                    errors.password ? "border-red-600" : ""
                  } bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  required=""
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    Necesitas una contraseña
                  </p>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required="true"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-white dark:text-gray-300"
                  >
                    Acepto los{" "}
                    <a
                      className="font-medium text-red-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terminos de uso y condiciones
                    </a>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-red-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Crear cuenta
              </button>
              <p className="text-sm font-light text-white dark:text-gray-400">
                ¿Ya tienes una cuenta?{" "}
                <Link
                  to="/login"
                  className="font-medium text-red-600 hover:underline dark:text-primary-500"
                >
                  Inicia sesión aqui
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignupPage;
