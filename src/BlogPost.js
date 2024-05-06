// BlogPost.js
import React from 'react';


const BlogPost = ({ post }) => {
  return (
          <div className="post-card">
            <img src={post.imageUrl} alt={post.title} className="post-image" />
            <div className="post-content">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-title">{post.date}</p>
              <p>{post.content}</p>
            </div>
          </div>
  );
}

export default BlogPost;



