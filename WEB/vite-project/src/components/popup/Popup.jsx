/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./popup.css";
import { Link } from "react-router-dom";
import NewCommentBox from "../comments/NewCommentBox";
import CommentBox from "../comments/CommentBox";
import { getComments } from "../../services/api-service";
import { useAuthContext } from "../../contexts/auth-context";

function Popup({ closePopup, playlistItems, selectedPlaylist }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const { user } = useAuthContext();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getComments(selectedPlaylist._id);
        setComments(response);
      } catch (error) {
        console.error("Error al obtener comentarios:", error);
      }
    };

    fetchComments();
  }, [selectedPlaylist._id]);

  const handleTitleClick = (videoId) => {
    setSelectedVideo((prevSelectedVideo) =>
      prevSelectedVideo === videoId ? null : videoId
    );
  };

  const description =
    selectedPlaylist.snippet.description || "Información no disponible";

  const channelLink = `https://www.youtube.com/channel/${selectedPlaylist.snippet.channelId}`;

  const rawPublishedAt = selectedPlaylist.snippet.publishedAt;
  const publishedAt = rawPublishedAt
    ? new Date(rawPublishedAt).toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      })
    : "Información no disponible";

  return (
    <div className="popup">
      <div className="popup-content border">
        <div className="flex mb-6">
          <p className="text-xl font-bold text-red-700">
            Titulo:{" "}
            <span className="text-gray-800">
              {selectedPlaylist.snippet.localized.title}
            </span>
          </p>
          <p className="ml-4 text-xl font-bold text-red-700">
            Autor:{" "}
            <span className="text-gray-800">
              {selectedPlaylist.snippet.channelTitle}
            </span>
          </p>
        </div>
        <div className="mb-6">
          <p className="text-lg font-bold text-gray-700">
            Descripción: <span className="text-gray-800">{description}</span>
          </p>
          <p className="text-lg font-bold text-gray-700">
            Fecha de publicación:{" "}
            <span className="text-gray-800">{publishedAt}</span>
          </p>
        </div>
        <Link
          to={channelLink}
          className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
        >
          Ir al canal
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
        </Link>
        <ul className="mt-5">
          {playlistItems.map((item) => (
            <li key={item._id} className="mb-4">
              <div
                className={`title-item rounded border p-4 ${
                  item.contentDetails.videoId === selectedVideo ? "active" : ""
                }`}
                onClick={() => handleTitleClick(item.contentDetails.videoId)}
              >
                {item.snippet.title}
              </div>
              {selectedVideo === item.contentDetails.videoId && (
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
            </li>
          ))}
        </ul>
      </div>
      <div className="comments-container">
        <ul className="comment-list">
          {comments.map((comment) => (
            <li key={comment._id} className="mb-2">
              <CommentBox
                name={user.name}
                text={comment.text}
                avatar={user.avatar}
                createdAt={comment.createdAt}
              />
            </li>
          ))}
        </ul>
        <div className="new-comment-container">
          <NewCommentBox playlistId={selectedPlaylist._id} />
        </div>
      </div>
      <button className="close-button" onClick={closePopup}>
        Cerrar detalles
      </button>
    </div>
  );
}

export default Popup;
