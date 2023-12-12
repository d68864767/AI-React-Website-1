import React from 'react';
import { useState } from 'react';

const CommunityForum = () => {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newPost = {
      title: formData.get('title'),
      content: formData.get('content'),
      author: formData.get('author'),
    };
    setPosts([...posts, newPost]);
    e.target.reset();
  };

  return (
    <div>
      <h1>Community Forum</h1>
      <form onSubmit={handlePostSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" required></textarea>
        <label htmlFor="author">Author:</label>
        <input type="text" id="author" name="author" required />
        <button type="submit">Submit</button>
      </form>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityForum;
</h1>