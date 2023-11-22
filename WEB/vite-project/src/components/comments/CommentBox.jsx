/* eslint-disable react/prop-types */
import { formatDistanceToNow } from 'date-fns';

function CommentBox({ name, text, avatar, createdAt }) {
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  return (
    <div className="max-w-lg mx-auto border px-4 py-4 rounded-lg">
      <div className="flex items-center mb-3">
        <img src={`/avatar${avatar}.png`} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
        <div>
          <div className="text-lg font-bold text-white">{name}</div>
          <div className="text-sm italic text-white font-thin">{timeAgo}</div>
        </div>
      </div>
      <div className="border-t border-gray-300 my-1"><p className="text-lg mt-2 font-bold text-white leading-relaxed">{text}</p></div>
      
    </div>
  );
}

export default CommentBox;