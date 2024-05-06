// App.js
import React, { useState } from "react";
import "./App.css";
import blogData from "./blogData.json";
import BlogPost from "./BlogPost";

const App = () => {
  const [posts, setPosts] = useState(blogData);

  return (
    <div className="blog-container">
      <h1 className="blog-title">CODEXCUE - Simple Blog Display</h1>
      <div className="post-container">
        {posts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;
