import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { persistCache } from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Posts from './screens/Posts';
import Loader from './screens/Loader';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/di6fj96h9cer',
  cache,
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer 6a76ZutNtjA8_v0IshR_eIWVnSRYiV-O-_Ikcwe8obs`,
  },
});

const App = () => {
  const [loadingCache, setLoadingCache] = useState(true);

  useEffect(() => {
    persistCache({
      cache,
      storage: AsyncStorage,
    }).then(() => setLoadingCache(false));
  }, []);

  if (loadingCache) {
    return <Loader />;
  }

  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={{flex: 1}}>
        <Posts />
      </SafeAreaView>
    </ApolloProvider>
  );
};
export default App;
