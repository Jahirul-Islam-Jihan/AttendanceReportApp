import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  Button,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import SearchBar from "../components/common/SearchBar";
import CustomButton from "../components/common/CustomButton";
import UserCard from "../components/common/Card";
import users from "../constants/userData";
import { Picker } from "@react-native-picker/picker";
import designations from "../constants/Designation";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Attandance = ({}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "designation">(
    "all"
  );
  const [selectedDesignation, setSelectedDesignation] = useState<
    string | undefined
  >(undefined);
  const [isModalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<any>();
  // Open the modal when the Designation is clicked
  const openDesignationModal = () => {
    setModalVisible(true);
  };

  // Filter users by the selected designation
  const filterByDesignation = () => {
    setSelectedFilter("designation");
    setModalVisible(false); // Close modal after selection
  };

  // Filter users by search query and designation
  const filteredUsers = useMemo(() => {
    let filtered = users;

    if (searchQuery) {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedFilter === "designation" && selectedDesignation) {
      filtered = filtered.filter(
        (user) => user.designation === selectedDesignation
      );
    }

    return filtered;
  }, [searchQuery, selectedFilter, selectedDesignation]);

  //Counting Present
  const presentCount = users.filter((user) => user.status === "Present").length;
  //Counting Absent
  const absentCount = users.filter((user) => user.status === "Absent").length;
  //Leave Absent
  const leaveCount = users.filter((user) => user.status === "Leave").length;

  return (
    <View style={styles.container}>
      <View style={styles.searchAndDate}>
        <View style={styles.date}>
          <Image
            source={require("../assets/images/dateAndTime.png")}
            style={styles.image}
          />
          <View>
            <Text style={styles.time}>Date : 20-Mar-2025</Text>
            <Text style={styles.time2}>Day : Wednesday</Text>
            <Text style={styles.time3}>Time : 4:16 PM</Text>
          </View>
        </View>
        <View style={styles.search}>
          <SearchBar
            onSearch={(text) => setSearchQuery(text)}
            placeholder="Search Employee.."
            style={{ backgroundColor: "white" }}
          />
        </View>
      </View>

      <View style={styles.button}>
        <CustomButton
          title="Designation"
          onPress={openDesignationModal} // Open modal to select designation
          style={{
            backgroundColor:
              selectedFilter === "designation" ? "#0463CA" : "#B0D6F5",
            borderColor: "black",
            borderWidth: 1,
            width: "65%",
            justifyContent: "center",
          }}
          textStyle={{ fontSize: 22 }}
        />
        <CustomButton
          title="All Department"
          onPress={() => setSelectedFilter("all")}
          style={{
            backgroundColor: selectedFilter === "all" ? "#0463CA" : "#B0D6F5",
            borderColor: "black",
            borderWidth: 1,
            width: "30%",
            justifyContent: "center",
          }}
          textStyle={{ fontSize: 13, textAlign: "center" }}
        />
      </View>

      {/* Modal to select designation */}
      {Platform.OS === "ios" ? (
        <Modal visible={isModalVisible} transparent animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 18 }}>Select Designation:</Text>
              <Picker
                selectedValue={selectedDesignation}
                onValueChange={(itemValue: string) =>
                  setSelectedDesignation(itemValue)
                }
                style={styles.picker}
                selectionColor={"white"}
              >
                {designations.map((designation) => (
                  <Picker.Item
                    key={designation}
                    label={designation}
                    value={designation}
                    color="white"
                  />
                ))}
              </Picker>
              <Button title="Filter" onPress={filterByDesignation} />
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      ) : (
        // Android picker directly in view )
        <Modal visible={isModalVisible} transparent animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>Select Designation (Android):</Text>
              <Picker
                selectedValue={selectedDesignation}
                onValueChange={(itemValue: string) =>
                  setSelectedDesignation(itemValue)
                }
                style={styles.androidPickerWrapper}
              >
                {designations.map((designation) => (
                  <Picker.Item
                    key={designation}
                    label={designation}
                    value={designation}
                  />
                ))}
              </Picker>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={filterByDesignation}
              >
                <Text style={styles.modalButtonText}>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.closeButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}

      <View style={styles.cardView}>
        <FlatList
          data={filteredUsers}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={styles.cardListContent}
          columnWrapperStyle={styles.row}
          scrollEnabled
          indicatorStyle="black"
          scrollsToTop
          renderItem={({ item }) => (
            <UserCard
              photoUrl={item.photoUrl}
              name={item.name}
              fatherName={item.fatherName}
              userId={item.id}
              status={item.status}
              onPress={() => navigation.navigate('EmployeeAttandanceReport', { user: item })}
            />
          )}
        />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#A0E7E5", "#C7C7FF"]}
          style={styles.employeePresentAll}
        >
          <Text
            style={{
              marginTop: 10,
              marginLeft: 10,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Total Employee : {users.length}
          </Text>
          <View style={styles.employeeTotal}>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.present}></View>
                <Text style={styles.employeeTotalText}>
                  Present : {presentCount}
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <View style={styles.currentwork}>
                  <View style={styles.currentwork2}></View>
                </View>

                <Text style={styles.employeeTotalText}>
                  Current Working : 4
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "column" }}>
              <View style={{ flexDirection: "row" }}>
                <View style={styles.absent}></View>
                <Text style={styles.employeeTotalText}>
                  Absent : {absentCount}
                </Text>
              </View>
              <View style={{ flexDirection: "row", marginTop: 5 }}>
                <View style={styles.leave}></View>
                <Text style={styles.employeeTotalText}>
                  Leave : {leaveCount}
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 0,
  },
  searchAndDate: {
    height: 100,
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 1,
  },
  search: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "50%",
  },
  date: {
    height: "100%",
    width: "50%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontSize: 14,
    fontWeight: "500",
    color: "#A020F0",
  },
  time2: {
    fontSize: 14,
    fontWeight: "500",
    color: "blue",
  },
  time3: {
    fontSize: 14,
    fontWeight: "500",
    color: "green",
  },
  image: {
    height: 80,
    width: 80,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 1,
  },
  cardView: {
    flexDirection: "column",
    flex: 1,
  },
  employeePresentAll: {
    width: "100%",
    height: "15%",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  row: {
    justifyContent: "space-around",
  },
  cardListContent: {
    paddingBottom: 20,
    paddingTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  picker: {
    backgroundColor: "#00416A",
    padding: 1,
    margin: 1,
    borderRadius: 8,
    overflow: "visible",
    height: 200,
    width: 300,
  },
  androidPickerWrapper: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 20,
    elevation: 4,
    height: 50,
    width: 300,
  },
  closeButton: {
    backgroundColor: "#A0A0A0",
  },

  modalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  modalButton: {
    backgroundColor: "#0463CA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginHorizontal: 10,
    flex: 1,
    alignItems: "center",
    height: 100,
    width: 100,
  },
  employeeTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 2,
    borderRadius: 8,
    margin: 10,
    width: 300,
  },
  present: {
    width: 20,
    height: 20,
    backgroundColor: "green",
    borderRadius: 25,
  },
  currentwork: {
    width: 20,
    height: 20,
    backgroundColor: "green",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  currentwork2: {
    width: 10,
    height: 10,
    backgroundColor: "white",
    borderRadius: 25,
  },
  absent: {
    width: 20,
    height: 20,
    backgroundColor: "red",
    borderRadius: 25,
  },
  leave: {
    width: 20,
    height: 20,
    backgroundColor: "orange",
    borderRadius: 25,
  },
  employeeTotalText: {
    fontSize: 16,
    marginLeft: 5,
    fontWeight: "500",
  },
});

export default Attandance;
