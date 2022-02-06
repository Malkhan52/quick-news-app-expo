import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MONTH = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

const formatDate = (isoDate) => {
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = date.getMonth();
  let dt = date.getDate();
  let Month = '';
  if (dt < 10) {
    dt = '0' + dt;
  }
  if (month < 10) {
    Month = MONTH[month];
  }
  return Month + ' ' + dt + ', ' + year;
};

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <View>
        {post.featuredImage && (
          <Image
            style={{ width: 300, height: 300 }}
            source={{ uri: post.featuredImage.url }}
          />
        )}
        <Text style={styles.text}>{post.title}</Text>
        <Text style={styles.text}>{post.author}</Text>
        <Text style={styles.text}>{formatDate(post.publishDate)}</Text>
        <Text style={styles.text}>{post.inshorts}</Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    margin: 10,
  },
});
