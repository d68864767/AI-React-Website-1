import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AI_NEWS } from '../graphql/queries';

const AiNews = () => {
  const { loading, error, data } = useQuery(GET_AI_NEWS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const aiNews = data.aiNews;

  return (
    <div>
      <h1>AI News</h1>
      <ul>
        {aiNews.map((news) => (
          <li key={news.id}>
            <h2>{news.title}</h2>
            <p>{news.description}</p>
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AiNews;
