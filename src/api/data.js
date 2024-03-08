export const data = {
  video_id: "abc123",
  comments: [
    {
      id: "comment1",
      author: "User1",
      text: "This is the first comment",
      timestamp: "2024-03-04T12:00:00Z",
      replies: [
        {
          id: "reply1",
          author: "User2",
          text: "Reply to the first comment",
          timestamp: "2024-03-04T12:05:00Z",
        },
        {
          id: "reply2",
          author: "User3",
          text: "Another reply to the first comment",
          timestamp: "2024-03-04T12:10:00Z",
        },
      ],
    },
    {
      id: "comment2",
      author: "User4",
      text: "Second comment",
      timestamp: "2024-03-04T12:15:00Z",
      replies: [],
    },
    {
      id: "comment3",
      author: "User5",
      text: "Third comment with nested replies",
      timestamp: "2024-03-04T12:20:00Z",
      replies: [
        {
          id: "reply3",
          author: "User6",
          text: "Reply to the third comment",
          timestamp: "2024-03-04T12:25:00Z",
          replies: [
            {
              id: "nested_reply1",
              author: "User7",
              text: "Nested reply to the third comment",
              timestamp: "2024-03-04T12:30:00Z",
            },
          ],
        },
      ],
    },
  ],
};
