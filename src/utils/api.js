```javascript
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://your-graphql-api-url',
});

const authLink = setContext((_, { headers }) => {
  // Add any authentication logic here if needed
  return {
    headers: {
      ...headers,
      // Add any headers required for authentication
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
```
