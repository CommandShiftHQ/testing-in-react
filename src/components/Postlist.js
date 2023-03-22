import React from "react";

import "../styles/postlist.css"

import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="postlist">
      {posts.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
    </div>
  );
};

export default PostList;