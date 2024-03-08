import { useEffect, useState } from "react";
import AddComment from "./AddComment";
import { getTimeDifference } from "./utils/timeago";
const Comment = ({ comment }) => {
  const [isReply, setIsReply] = useState(false);
  console.log(comment);
  return (
    <div className="p-4 flex flex-col border-2 border-blue-700 rounded-lg">
      <div className="flex items-center gap-2">
        <h4 className="text-bold text-2xl">{comment.author}</h4>
        <span>{getTimeDifference(comment.timestamp)}</span>
      </div>
      <div>
        <p>{comment.text}</p>
      </div>
      <button
        onClick={() => {
          setIsReply(!isReply);
        }}
      >
        Reply
      </button>
      {isReply && <AddComment isReply={isReply} setIsReply={setIsReply} />}
      <div className="space-y-2">
        {comment.replies &&
          comment.replies.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
      </div>
    </div>
  );
};

export default Comment;
