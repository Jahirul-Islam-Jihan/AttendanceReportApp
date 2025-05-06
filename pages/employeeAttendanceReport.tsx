import React, { useState } from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import ProfileReportCard from "../components/common/ProfileReportCard";
import CustomButton from "../components/common/CustomButton";
import AppCalendar from "../components/calander/Calander";
import { type DateData, type CalendarProps } from "react-native-calendars";
import {
  AttendanceRecord,
  attendanceRecords,
  AttendanceStatus,
} from "../constants/Attendance";
type MarkedDates = CalendarProps["markedDates"];

export default function EmployeeAttandanceReport({ route }: any) {
  const { user } = route.params;
  const [selected, setSelected] = useState<string>("");
  

  const handleDateSelect = (day: DateData) => {
    setSelected(day.dateString);
    const record = attendanceRecords.find(
      (r) => r.userId === user.id && r.date === day.dateString
    );
    setAttendanceDetail(record || null);
  };

  const [attendanceDetail, setAttendanceDetail] =
    useState<AttendanceRecord | null>(null);
  const getMarkedDatesForUser = (
    userId: string,
    selected: string
  ): MarkedDates => {
    const userAttendance = attendanceRecords.filter(
      (record) => record.userId === userId
    );
    const statusColors: Record<AttendanceStatus, string> = {
      present: "green",
      absent: "red",
      late: "orange",
      leave: "gray",
      weekend: "indigo",
    };

    const marked: MarkedDates = {};

    for (const { date, status } of userAttendance) {
      marked[date] = {
        customStyles: {
          container: {
            backgroundColor: statusColors[status],
          },
          text: {
            color: "white",
          },
        },
      };
    }

    if (selected) {
      marked[selected] = {
        ...marked[selected],
        customStyles: {
          ...(marked[selected]?.customStyles || {}),
          container: {
            ...(marked[selected]?.customStyles?.container || {}),
            borderColor: "#00416A",
            borderWidth: 2,
          },
          text: {
            ...(marked[selected]?.customStyles?.text || {}),
            fontWeight: "bold",
          },
        },
      };
    }

    return marked;
  };

  return (
    <View style={styles.container}>
      <View style={styles.datePicker}>
        <CustomButton
          title="From Date"
          style={{
            backgroundColor: "white",
            borderColor: "#00416A",
            borderWidth: 2,
            justifyContent: "center",
            marginHorizontal: 10,
          }}
          textStyle={{ fontSize: 13, textAlign: "center", color: "black" }}
        />
        <Image
          source={require("../assets/images/dateAndTime.png")}
          style={styles.image}
        />
        <CustomButton
          title="To Date"
          style={{
            backgroundColor: "white",
            borderColor: "#00416A",
            borderWidth: 2,
            justifyContent: "center",
            marginHorizontal: 10,
          }}
          textStyle={{ fontSize: 13, textAlign: "center", color: "black" }}
        />
      </View>
      <ProfileReportCard
        name={user.name}
        fatherName={user.fatherName}
        userId={user.id}
        photoUrl={user.photoUrl}
        designation={user.designation}
        department={user.department}
        titleStyle={{ color: "red" }}
        textName={{ color: "#00416A" }}
        textDepartment={{ color: "#FF5733" }}
        textDesignation={{ color: "#9c5cb4" }}
        textUserid={{ color: "black" }}
        cardStyle={{ height: "17%" }}
      />
      <View
        style={{ height: "0.2%", width: "98%", backgroundColor: "#00416A" }}
      />
      <View style={styles.reportCard}>
        <Text style={styles.textReport}>Attendance Report:</Text>
        <View
          style={{
            height: 120,
            margin: 5,
            marginTop: 10,
            position: "relative",
          }}
        >
          {/* Top-Left View */}
          <View style={{ position: "absolute", top: 0, left: 0 }}>
            <Text style={[styles.reportTextLeft, { color: "black" }]}>
              Date Period: 1st April 2025 To 15th April 2025
            </Text>
            <Text style={[styles.reportTextLeft, { color: "#9c5cb4" }]}>
              Total Working Day: 13 Days
            </Text>
            <Text style={[styles.reportTextLeft, { color: "#FF5733" }]}>
              Scheduled Works Hours: 104 hrs
            </Text>
            <Text style={[styles.reportTextLeft, { color: "green" }]}>
              Total Present Day: 11 Days
            </Text>
            <Text style={[styles.reportTextLeft, { color: "red" }]}>
              Total Absent Day: 2 Days
            </Text>
          </View>

          {/* Bottom-Right View */}
          <View style={{ position: "absolute", bottom: 0, right: 0 }}>
            <Text style={[styles.reportTextRight, { color: "#00416A" }]}>
              Total Working Hours: 96 hours
            </Text>
            <Text style={[styles.reportTextRight, { color: "red" }]}>
              Total Deduction Time: 6 hours
            </Text>
            <Text style={[styles.reportTextRight, { color: "green" }]}>
              Total Over Time: 13 hours
            </Text>
            <Text style={[styles.reportTextRight, { color: "black" }]}>
              Regular Working Time: 8.00pm-6.00am
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.calendarStyle}>
        <AppCalendar
          onDateSelect={handleDateSelect}
          initialDate="2025-04-01"
          markedDates={getMarkedDatesForUser(user.id, selected)}
          disableDates={["2025-05-10", "2025-05-11"]}
        />
      </View>
      <View style={{ alignItems: "center", width: "100%" }}>
        {attendanceDetail ? (
          <View
            style={{
              backgroundColor: "#eef6f9",
              padding: 10,
              width: "100%",
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowOffset: { width: 0, height: 1 },
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "#00416A",
                alignSelf:"center"
              }}
            >
              Attendance Detail
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {/* Left side: Date & Status */}
              <View>
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#333" }}
                >
                  📅 Date: {attendanceDetail.date}
                </Text>
                <Text
                  style={{ fontSize: 14, fontWeight: "500", color: "#333" }}
                >
                  📌 Status: {attendanceDetail.status.toUpperCase()}
                </Text>
              </View>

              {/* Right side: Check-In & Check-Out */}
              <View style={{ alignItems: "center" }}>
                {attendanceDetail.checkIn && (
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: "#4CAF50",
                    }}
                  >
                    ⏰ In: {attendanceDetail.checkIn}
                  </Text>
                )}
                {attendanceDetail.checkOut && (
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: "500",
                      color: "#F44336",
                    }}
                  >
                    ⏳ Out: {attendanceDetail.checkOut}
                  </Text>
                )}
              </View>
            </View>
          </View>
        ) : (
          <Text style={{ color: "gray" }}>
            No attendance data for selected date.
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  image: {
    height: 50,
    width: 50,
  },
  datePicker: {
    flexDirection: "row",
    height: "7%",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  reportCard: {
    height: "20%",
    width: "98%",
    backgroundColor: "#e3ed9f",
    marginTop: 2,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 5,
  },
  textReport: {
    fontSize: 18,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#9c5cb4",
  },
  reportTextLeft: {
    fontSize: 13,
    fontWeight: "500",
  },
  reportTextRight: {
    fontSize: 12,
    fontWeight: "500",
  },
  dateText: {
    fontSize: 16,
    backgroundColor: "#6dd5ed",
    height: "8.8%",
    width: "100%",
  },
  calendarStyle: {
    height: "34.8%",
    width: "100%",
    marginTop: "0.3%",
  },
});
