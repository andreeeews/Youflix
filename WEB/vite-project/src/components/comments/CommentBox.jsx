/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { formatDistanceToNow } from 'date-fns';
import { useAuthContext } from "../../contexts/auth-context";
import { deleteComment } from "../../services/api-service";

function CommentBox({ name, text, avatar, createdAt, comment, comments, updateComments }) {
  const { user } = useAuthContext();
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  const handleDeleteComment = () => {
  deleteComment(comment._id)
    .then(() => {
      // Llama a la función de actualización después de la eliminación
      updateComments(comments.filter(c => c._id !== comment._id));
    })
    .catch((error) => {
      console.error("Error al eliminar comentario:", error);
    });
};

  return (
    <div className="bg-gray-700 max-w-lg mx-auto border px-4 py-4 rounded-lg">
      <div className="flex items-center mb-3">
        <img src={`/avatar${avatar}.png`} alt="Avatar" className="border-4 border-red-600 w-12 h-12 rounded-full mr-4" />
        <div>
          <div className="text-lg font-bold text-white">{name}</div>
          <div className="text-sm italic text-white font-thin">{timeAgo}</div>
        </div>
        {/* Agregar el botón de eliminar si el comentario pertenece al usuario logado */}
        {user && user.name === name && (
          <button className="ml-auto text-red-500" onClick={handleDeleteComment}>
            Borrar
          </button>
        )}
      </div>
      <div className="border-t border-gray-300 my-1">
        <p className="text-lg mt-2 font-bold text-white leading-relaxed">{text}</p>
      </div>
    </div>
  );
}

export default CommentBox;
