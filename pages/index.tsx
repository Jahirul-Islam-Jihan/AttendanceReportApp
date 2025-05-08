import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@apollo/client";
import { GET_USERS_WITH_POSTS } from "../API/queries";
import ExampleCard from "../components/common/ExampleCard";
import Loader from "../components/common/loader/Loader";

export default function HomeScreen() {
  const navigation = useNavigation<any>();
  const { loading, error, data, refetch } = useQuery(GET_USERS_WITH_POSTS);
  const [refreshing, setRefreshing] = useState(false);

  if (loading && !refreshing) return <Loader visible={true} />;
  if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

  const handleRefresh = async () => {
    try {
      setRefreshing(true);
      await refetch();
    } catch (err) {
      console.error("Refresh error:", err);
    } finally {
      setRefreshing(false);
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Attandance")}>
        <Text style={styles.button}>Go to Attendance screen</Text>
      </TouchableOpacity>
      <View style={styles.cardView}>
        <FlatList
          data={data.users.data}
          keyExtractor={(items) => items.id}
          contentContainerStyle={styles.cardListContent}
          onRefresh={handleRefresh}
          refreshing={refreshing}
          indicatorStyle="black"
          scrollsToTop
          refreshControl={
            <RefreshControl
              onRefresh={handleRefresh}
              tintColor="transparent" // remove spinner on iOS
              refreshing={false} />
          }
          renderItem={({ item }) => (
            <ExampleCard
              name={item.name}  
              userId={item.id}
              email={item.email}
              posts={item.posts.data}
              titleStyle={{ color: "red" }}
              textName={{ color: "#00416A" }}
              textDepartment={{ color: "#FF5733" }}
              textDesignation={{ color: "#9c5cb4" }}
              textUserid={{ color: "black" }}
              cardStyle={{ height: "auto", width: "100%" }}
            />
          )}
        />
        {refreshing && <Loader visible={true} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    marginTop: 50,
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  error: { color: "red", textAlign: "center", marginTop: 20 },
  row: {
    justifyContent: "space-around",
  },
  cardListContent: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  cardView: {
    flexDirection: "column",
    width: "100%",
    padding: 10,
    margin: 10,
  },
});
