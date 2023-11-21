/* eslint-disable react/prop-types */
import { useState } from "react";
import "./popup.css";

function Popup({ closePopup, playlistItems, selectedPlaylist }) {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleTitleClick = (videoId) => {
    setSelectedVideo((prevSelectedVideo) =>
      prevSelectedVideo === videoId ? null : videoId
    );
  };


  document.body.classList.toggle("popup-open", selectedVideo !== null);

  //const backgroundStyle = {
  //  backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%), url(${selectedPlaylist.snippet.thumbnails.maxres.url})`,
  //  backgroundSize: "cover",
  //  backgroundRepeat: "no-repeat",
  //  backgroundPosition: "center",
 // };

  return (
    <div className="popup">
      <div className="popup-content">
        <h1 className="mb-5 text-lg font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {selectedPlaylist.snippet.localized.title}
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          TO DO SERIE INFO
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Learn more
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
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
        <h5>{selectedPlaylist.snippet.localized.title}</h5>
        <ul>
          {playlistItems.map((item) => (
            <li
              key={item._id}
              className={`title-item rounded border p-4 mb-4 ${
                item.contentDetails.videoId === selectedVideo ? "active" : ""
              }`}
              onClick={() => handleTitleClick(item.contentDetails.videoId)}
            >
              {item.snippet.title}
            </li>
          ))}
        </ul>
        {selectedVideo && (
          <div className="video-container mt-4">
            <iframe
              className="video-player"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${selectedVideo}`}
              title="YouTube video player"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <button className="close-button" onClick={closePopup}>
        Close Popup
      </button>
    </div>
  );
}

export default Popup;
