function Card() {
  return (
    <>
      <div>
        <div className="py-8 w-full items-center justify-center bg-black border-b-4 border-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex">
          <div>
            <img
              className="object-cover w-full h-96"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt=""
            />
          </div>
          <div className="flex flex-col p-4 items-center justify-center leading-normal">
            <h5 className="text-2xl font-bold mb-2 text-white dark:text-white">
              Pronto podrás disfrutarlo en la tele
            </h5>
            <p className="font-normal mb-3 text-white dark:text-gray-400">
              Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores
              Blu-ray y muchos más.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="py-8 w-full items-center justify-center bg-black border-b-4 border-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex">
          <div className="flex flex-col p-4 items-center justify-center leading-normal">
            <h5 className="text-2xl font-bold mb-2 text-white dark:text-white">
              Diseñado para casi cualquier dispositivo
            </h5>
            <p className="font-normal mb-3 text-white dark:text-gray-400">
              Ve en streaming todas las películas y series en tu móvil, tableta,
              ordenador y televisor.
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-96"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt=""
            />
          </div>
        </div>
        <div className="py-8 w-full items-center justify-center bg-black border-b-4 border-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex">
          <div>
            <img
              className="object-cover w-full h-96"
              src="https://occ-0-7355-5574.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfqIddV64JsFW70ZLyiGkx_uJQMdtpWNP8g361QHR1WQSDmLmuv967PGBRIRJX9QB731ET5MlcyjW6-cYmVYL6JmtRuo6bjxD1wk.png?r=b32"
              alt=""
            />
          </div>
          <div className="flex flex-col p-4 items-center justify-center leading-normal">
            <h5 className="text-2xl font-bold mb-2 text-white dark:text-white">
              Crea perfiles infantiles
            </h5>
            <p className="font-normal mb-3 text-white dark:text-gray-400">
              Deja que los niños vivan aventuras con sus personajes favoritos en
              un espacio diseñado exclusivamente para ellos, gratis con tu
              suscripción.
            </p>
          </div>
        </div>
        <div className="py-8 w-full items-center justify-center bg-black border-b-4 border-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex">
          <div className="flex flex-col p-4 items-center justify-center leading-normal">
            <h5 className="text-2xl font-bold mb-2 text-white dark:text-white">
              Descárgate tus favoritas para verlas sin conexión (pronto)
            </h5>
            <p className="font-normal mb-3 text-white dark:text-gray-400">
              Disfruta de Youflix en tierra, mar y aire…
            </p>
          </div>
          <div>
            <img
              className="object-cover w-full h-96"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
