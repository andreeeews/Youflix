import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./list.css";
import { getPlaylists } from "../../services/api-service";

function List() {
  const [data, setData] = useState([]);

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
      <div className="max-w-sm bg-white borde rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {data.map((playlist) => (
          <div key={playlist._id}>
            <a href="#">
              <img
                className="rounded-t-lg"
                src={playlist.snippet.thumbnails.maxres.url}
                alt={playlist.snippet.title}
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
