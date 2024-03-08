import Comment from "./components/Comment";
import { data } from "./api/data";
import { useState } from "react";
const comments = [...data.comments];
const App = () => {
  const [isFocused, setIsFocused] = useState(false);
  const handleSubmit = () => {};
  return (
    <>
      <div className="p-4 border-2 display flex flex-col gap-2">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      <div className="">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add a comment"
            className="w-full border-b-2 border-gray-400 focus:border-gray-700 focus:outline-none mt-4 mb-2"
            onFocus={() => {
              setIsFocused(true);
            }}
          />
          {isFocused && (
            <>
              <button
                type="button"
                onClick={() => {
                  setIsFocused(false);
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="mt-2 flex justify-center items-start bg-blue-500 rounded-lg py-2 px-4"
              >
                Comment
              </button>
            </>
          )}
        </form>
      </div>
    </>
  );
};

export default App;
