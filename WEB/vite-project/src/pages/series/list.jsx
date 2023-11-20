import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { getPlaylists, getPlaylistItems } from "../../services/api-service"; // Asumo que tienes una función para obtener los elementos de la lista
import Popup from "../../components/popup/Popup";

function List() {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [playlistItems, setPlaylistItems] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  useEffect(() => {
    getPlaylists().then((data) => {
      setData(data);
    });
  }, []);

  const openPopup = (playlist) => {
    setShowPopup(true);
    setSelectedPlaylist(playlist); // Guarda los datos de la playlist seleccionada
    getPlaylistItems(playlist._id).then((items) => {
      setPlaylistItems(items);
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    setPlaylistItems([]);
    setSelectedPlaylist(null);
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="max-w-sm bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {data.map((playlist) => (
          <div
            key={playlist._id}
            className="playlist-card"
            onClick={() => openPopup(playlist)}
          >
            <a href="#">
              <img
                className="rounded-t-lg"
                src={playlist.snippet.thumbnails.maxres.url}
                alt={playlist.snippet.title}
              />
            </a>
            <div className="playlist-info">
              <h3>{playlist.snippet.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {showPopup && (
        <Popup
          closePopup={closePopup}
          playlistItems={playlistItems}
          selectedPlaylist={selectedPlaylist} // Pasa los datos de la playlist al Popup
        />
      )}
    </>
  );
}

export default List;