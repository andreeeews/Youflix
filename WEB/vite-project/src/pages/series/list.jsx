import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { getPlaylists, getPlaylistItems } from "../../services/api-service";
import Popup from "../../components/popup/Popup";
import searchIcon from "../../assets/search.svg";

function List() {
  const [data, setData] = useState([]);
  const [recentlyAdded, setRecentlyAdded] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [playlistItems, setPlaylistItems] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getPlaylists().then((data) => {
      setData(data);

      // Obtener playlists recién añadidas (menos de 2 días de antigüedad)
      const twoDaysAgo = new Date();
      twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
      const recentlyAddedPlaylists = data.filter(
        (playlist) => new Date(playlist.createdAt) > twoDaysAgo
      );
      setRecentlyAdded(recentlyAddedPlaylists);
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
          <img src={searchIcon} alt="Search Icon" />
          <input
            type="text"
            placeholder="Buscar serie"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="">
        {/* Sección "Series recién añadidas" */}
        <div className="playlist-section flex flex-col mt-11">
          <h2 className="text-white">Series recién añadidas</h2>
          <div className="flex gap-3 p-1 mt-5">
            {recentlyAdded.map((playlist) => (
              <div
                key={playlist._id}
                className="playlist-card w-full"
                onClick={() => openPopup(playlist)}
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-auto"
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
        </div>

        {/* Sección "Series disponibles" */}
        <div className="playlist-section flex flex-col mt-11">
          <h2 className="text-white">Series disponibles</h2>
          <div className="flex p-1 gap-3 mt-5">
            {filteredPlaylist.map((playlist) => (
              <div
                key={playlist._id}
                className="playlist-card w-full"
                onClick={() => openPopup(playlist)}
              >
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-auto"
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
        </div>
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
