import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import Loader from './Loader';
import Post from './Post';

const QUERY = gql`
  {
    posts(id: "3gMQ6ePbPtOCBd8fAGdOV9") {
      title
      author
      publishDate
      inshorts
      featuredImage {
        url
      }
    }
  }
`;
const QUERY_COLLECTION = gql`
  {
    postsCollection {
      items {
        title
        author
        publishDate
        inshorts
        featuredImage {
          url
        }
      }
    }
  }
`;

const Posts = () => {
  const { data, loading } = useQuery(QUERY_COLLECTION);
  let posts = [];
  if (!loading) {
    posts = data.postsCollection.items;
  }
  const renderPost = ({ item }) => <Post post={item} />;
  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});
