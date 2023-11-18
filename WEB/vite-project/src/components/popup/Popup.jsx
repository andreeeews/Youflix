/* eslint-disable react/prop-types */
import "./popup.css"

function Popup({ closePopup, playlistItems }) {
  console.log(playlistItems);
  console.log("hola");

  return (
    <div className="popup">
      <div className="popup-content">
        <ul>
          {playlistItems.map((item) => (
            <li key={item._id}>{item.snippet.title}</li>
          ))}
        </ul>
        <button onClick={closePopup}>Close Popup</button>
      </div>
    </div>
  );
}

export default Popup;