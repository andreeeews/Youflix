function Card() {
  return (
    <>
    <div>
      <div className="w-full items-center justify-center bg-black border-b-4 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex">
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
          <p className="font-normal mb-3 text-gray-700 dark:text-gray-400">
            Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores
            Blu-ray y muchos más.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div className="w-full items-center justify-center bg-black border-b-4 border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 flex">
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
          <p className="font-normal mb-3 text-gray-700 dark:text-gray-400">
            Smart TV, Playstation, Xbox, Chromecast, Apple TV, reproductores
            Blu-ray y muchos más.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Card;
