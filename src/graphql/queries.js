import { gql } from '@apollo/client';

export const GET_AI_CONTENT = gql`
  query GetAIContent {
    aiContent {
      id
      title
    }
  }
`;
