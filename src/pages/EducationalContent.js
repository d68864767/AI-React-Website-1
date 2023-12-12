import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AI_CONTENT } from '../graphql/queries';

const EducationalContent = () => {
  const { loading, error, data } = useQuery(GET_AI_CONTENT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const aiContent = data.aiContent;

  return (
    <div>
      <h1>Educational Content</h1>
      <ul>
        {aiContent.map((content) => (
          <li key={content.id}>{content.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default EducationalContent;
