import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { getPlaylists, getPlaylistItems } from "../../services/api-service";
import Popup from "../../components/popup/Popup";
import searchIcon from "../../assets/search.svg"

function List() {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [playlistItems, setPlaylistItems] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getPlaylists().then((data) => {
      setData(data);
    });
  }, []);

  const openPopup = (playlist) => {
    setShowPopup(true);
    setSelectedPlaylist(playlist);
    getPlaylistItems(playlist._id).then((items) => {
      setPlaylistItems(items);
    });
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPlaylist = data.filter((playlist) =>
    playlist.snippet.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const closePopup = () => {
    setShowPopup(false);
    setPlaylistItems([]);
    setSelectedPlaylist(null);
  };

  return (
    <>
      <div className="navbar-container">
        <Navbar />
        <div className="search-input">
        <img src={searchIcon}></img>
          <input
            type="text"
            placeholder="Buscar serie"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="max-w-sm bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {filteredPlaylist.map((playlist) => (
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
          selectedPlaylist={selectedPlaylist}
        />
      )}
    </>
  );
}

export default List;
