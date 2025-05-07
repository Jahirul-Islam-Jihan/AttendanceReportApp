import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native";

interface UserCardProps {
  name?: string;
  email?: string;
  userId?: string;
  posts?: { id: string; title: string }[];
  department?: string;
  photoUrl?: string; // Local or remote URI
  cardStyle?: ViewStyle;
  imageStyle?: ImageStyle;
  titleStyle?: TextStyle;
  textUserid?: TextStyle;
  textName?: TextStyle;
  textDesignation?: TextStyle;
  textDepartment?: TextStyle;
}

const ExampleCard: React.FC<UserCardProps> = ({
  name,
  email,
  userId,
  posts,
  department,
  photoUrl,
  cardStyle,
  imageStyle,
  titleStyle,
  textUserid,
  textName,
  textDesignation,
  textDepartment,
}) => {
  return (
    <View style={[styles.card, cardStyle]}>
      <Text style={[styles.title, titleStyle]}>Name: {name}</Text>
      <Text style={[styles.text, textName]}>Email: {email}</Text>
      <Text style={[styles.text, textUserid]}>ID NO: {userId}</Text>
      {Array.isArray(posts) && posts.length > 0 && (
        <View style={{ marginTop: 8 }}>
          <Text style={[styles.title, { fontSize: 16 }]}>Posts:</Text>
          {posts.map((post) => (
            <Text key={post.id} style={[styles.text, { fontSize: 14 }]}>
              ❤ {post.title}
            </Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginTop:10,
    flexDirection: "column",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 16,
    color: "#00416A",
    marginBottom: 2,
    fontWeight: "600",
  },
});

export default ExampleCard;
