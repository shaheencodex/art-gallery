import React from "react";

function Feed() {
  const posts = [
    {
      id: 1,
      user: "Lara Leones",
      username: "@thewallart",
      userimage: "Lara.png",
      text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its.",
      image: "post1.png", // Replace with actual image
      likes: "9.8k",
      comments: "8.6k",
      shares: "7.2k",
    },
    {
      id: 2,
      user: "Thomas J.",
      username: "@thecustomcreater",
      userimage: "Thomas.png",
      text: "It is a long established fact that a reader will be distracted by readable content of a page when looking at its.",
      image: "post2.png",
      likes: "9.8k",
      comments: "8.6k",
      shares: "7.2k",
    },
  ];

  return (
    <div className="feed">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-header">
            <img src={post.userimage} alt={post.user} className="user-image" />
            <div>
              <h3 className="post-user">{post.user}</h3>
              <p className="post-username">{post.username}</p>
            </div>
          </div>
          <p className="post-paragraph">
            {post.text}
            <a href="{post.username}">
              <span className="read"> Read More</span>
            </a>
          </p>
          <img className="post-image" src={post.image} alt="ArtWork" />
          <div className="post-action">
            <img
              className="post-symbols"
              src="/hearts.svg"
              alt="likes"
              gap="2"
            />
            {post.likes}
            <img
              className="post-symbols"
              src="/comment.svg"
              alt="message"
              gap="2"
            />
            {post.comments}
            <img className="post-symbols" src="/share.svg" alt="share" />
            {post.shares}
          </div>
        </div>
      ))}
    </div>
  );
}
export default Feed;
