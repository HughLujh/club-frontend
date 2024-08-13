import React from 'react';
import './Posts.css';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: 'Hello 1111',
      description: 'This is a summary of the first post.',
    },
    {
      id: 2,
      title: 'Hello 2222',
      description: 'This is a summary of the second post.',
    },
    {
      id: 3,
      title: 'Hello 3333',
      description: 'This is a summary of the third post.',
    },
  ];

  return (
    <div className="posts-page">
      <h1>Blog Posts</h1>
      <div className="posts-container">
        {posts.map(post => (
          <div key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p className="post-summary">{post.description}</p>
            <a href={`/posts/${post.id}`} className="read-more">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
