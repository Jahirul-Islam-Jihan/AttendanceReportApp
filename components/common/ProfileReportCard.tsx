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
  fatherName?: string;
  userId?: string;
  designation?: string;
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

const ProfileReportCard: React.FC<UserCardProps> = ({
  name,
  fatherName,
  userId,
  designation,
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
      <Image source={{ uri: photoUrl }} style={[styles.image, imageStyle]} />
      <View style={styles.info}>
        <Text style={[styles.title, titleStyle]}>Employee Name: {name}</Text>
        <Text style={[styles.text, textName]}>
          Father's Name: {fatherName}
        </Text>
        <Text style={[styles.text, textUserid]}>ID NO: {userId}</Text>
        <Text style={[styles.text, textDesignation]}>Designation: {designation}</Text>
        <Text style={[styles.text, textDepartment]}>Department: {department}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#6dd5ed",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    padding: 10,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flexDirection: "row",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#ccc",
  },
  info: {
    flex: 1,
    flexDirection: "column",
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

export default ProfileReportCard;
