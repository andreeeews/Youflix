import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { getPlaylists } from "../../services/api-service";

function List() {
  const [data, setData] = useState([]);
  console.log(data)
  useEffect(() => {
    getPlaylists().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="max-w-sm bg-white border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {data.map((playlist) => (
          <div key={playlist._id} className="playlist-card">
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
    </>
  );
}

export default List;
