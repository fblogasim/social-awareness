import React, { useState } from "react";

function PostApproval() {
  const [posts, setPosts] = useState({
    post1: {
      id: "post1",
      content: "This is the content of Campaign 1",
      isApproved: null,
    },
    post2: {
      id: "post2",
      content: "This is the content of Campaign 2",
      isApproved: null,
    },
    post3: {
      id: "post3",
      content: "This is the content of Campaign 3",
      isApproved: null,
    },
  });

  const handleApprove = (postId) => {
    setPosts({
      ...posts,
      [postId]: { ...posts[postId], isApproved: true },
    });
  };

  const handleDecline = (postId) => {
    setPosts({
      ...posts,
      [postId]: { ...posts[postId], isApproved: false },
    });
  };

  return (
    <div>
      <h2>Campaign Approval</h2>
      {Object.values(posts).map((post) => (
        <div key={post.id} className="card">
          <p>{post.content}</p>
          <img src={require("../images/Placeholder.png")} />
          {post.isApproved ? (
            <p style={{ color: "green" }}>Post is Approved!</p>
          ) : post.isApproved === false ? (
            <p style={{ color: "red" }}>Post is Declined.</p>
          ) : null}
          <button
            onClick={() => handleApprove(post.id)}
            className="button success"
          >
            Approve
          </button>
          <button
            onClick={() => handleDecline(post.id)}
            className="button danger"
          >
            Decline
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default PostApproval;
