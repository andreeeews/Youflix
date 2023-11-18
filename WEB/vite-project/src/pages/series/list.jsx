import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { getPlaylists, getPlaylistItems } from "../../services/api-service"; // Asumo que tienes una función para obtener los elementos de la lista
import Popup from "../../components/popup/Popup";

function List() {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false)
  const [playlistItems, setPlaylistItems] = useState([]);

  useEffect(() => {
    getPlaylists().then((data) => {
      setData(data);
    });
  }, []);

  const openPopup = () => {
    setShowPopup(true)
    getPlaylistItems(data[0]._id).then((items) => {
      setPlaylistItems(items);
    });
  };

  const closePopup = () => {
    setShowPopup(false)
  console.log("Closing Popup");
  setPlaylistItems([]);
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
      {showPopup && <Popup closePopup={closePopup} playlistItems={playlistItems} />}
    </>
  );
}

export default List;
