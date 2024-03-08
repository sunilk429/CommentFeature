import { useState } from "react";

const AddComment = ({ isReply, setIsReply }) => {
  const handleSubmit = () => {};
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a comment"
          className="w-full border-b-2 border-gray-400 focus:border-gray-700 focus:outline-none mt-4 mb-2"
        />
      </form>
      <div className="mt-2 flex gap-2">
        <button
          type="button"
          className="flex justify-center items-start bg-gray-100 rounded-lg py-2 px-4"
          onClick={() => {
            setIsReply(!isReply);
          }}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex justify-center items-start bg-blue-500 rounded-lg py-2 px-4"
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default AddComment;
