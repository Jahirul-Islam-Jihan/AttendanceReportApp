import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

type AttendanceStatus = "Present" | "Absent" | "Leave";

type UserCardProps = {
  photoUrl: string;
  name: string;
  fatherName: string;
  userId: string;
  status: AttendanceStatus;
  onPress?: () => void; 
};

const getBorderColor = (status: AttendanceStatus): string => {
  switch (status) {
    case "Present":
      return "#4CAF50";
    case "Absent":
      return "#F44336";
    case "Leave":
      return "#FF9300";
    default:
      return "#ddd";
  }
};

const UserCard: React.FC<UserCardProps> = ({
  photoUrl,
  name,
  fatherName,
  userId,
  status,
  onPress,
}) => {
  const borderColor = getBorderColor(status);

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.card, { borderColor }]}>
        <Image source={{ uri: photoUrl }} style={styles.photo} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.detail}>Father: {fatherName}</Text>
        <Text style={styles.detail}>ID: {userId}</Text>
        <View
          style={[styles.statusContainer, { backgroundColor: borderColor }]}
        >
          <Text style={[styles.statusText, { color: "white" }]}>{status}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 180,
    height: 180,
    borderWidth: 3,
    borderRadius: 12,
    padding: 10,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  photo: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: "#ccc",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  detail: {
    fontSize: 12,
    color: "#555",
  },
  statusContainer: {
    position: "absolute",
    bottom: 0.1,
    right: 0.1,
    borderTopLeftRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  statusText: {
    fontWeight: "600",
    fontSize: 13,
  },
});

export default UserCard;
