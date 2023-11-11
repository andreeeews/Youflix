import { useForm } from "react-hook-form";
import { login } from "../../services/api-service";
import { useAuthContext } from "../../contexts/auth-context";
import { Link } from "react-router-dom";
import "../../components/header/header.css";
import "../login/login.css";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { onLogin } = useAuthContext();

  function handleLogin(data) {
    login(data).then((response) => {
      onLogin(response);
    });
  }
  return (
    <section className="">
      <div className="custom-background flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="custom-background-content w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="login-color p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
              Iniciar sesión
            </h1>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Tu email
                </label>
                <input
                  aria-invalid={errors.email ? "true" : "false"}
                  {...register("email", { required: true, maxLength: 30 })}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                />
                {errors.email && errors.email.type === "required" && (
                  <span role="alert" className="text-red-600">
                    This is required
                  </span>
                )}
                {errors.email && errors.email.type === "maxLength" && (
                  <span role="alert">Max length exceeded</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Contraseña
                </label>
                <input
                  {...register("password")}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start"></div>
                <a
                  href="#"
                  className="text-white text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  ¿Has olvidado la contraseña?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-red-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Inicia sesión
              </button>
              <p className="text-sm font-light text-white dark:text-gray-400">
                ¿No tienes cuenta aún?{" "}
                <Link to="/register"
                  className="text-red-500 font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Registrate
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
