import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { ALL_BOOKINGS } from "../Data/dummyData/BookingData";

const AllBookingScreen = () => {
  // Render function for each booking item
  const renderBookingItem = ({ item }) => {
    return (
      <View style={styles.bookingItem}>
        {/* Companion Profile Image */}
        <Image
          source={{ uri: item.companionProfileImage }}
          style={styles.profileImage}
        />
        {/* Guest Profile Image */}
        <Image
          source={{ uri: item.guestProfileImage }}
          style={styles.profileImage}
        />

        {/* Booking Details */}
        <Text style={styles.bookingId}>Booking ID: {item.id}</Text>
        <Text style={styles.name}>Name: {item.name}</Text>
        <Text style={styles.location}>Location: {item.location}</Text>
        <Text style={styles.confirmationCode}>
          Confirmation Code: {item.confirmationCode}
        </Text>
        <Text style={styles.amount}>Amount Paid: ${item.amountPaid}</Text>
        <Text style={styles.description}>Description: {item.description}</Text>
        <Text style={styles.refundable}>
          Refundable: {item.refundable ? "Yes" : "No"}
        </Text>
        <Text style={styles.status}>Status: {item.status}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={ALL_BOOKINGS}
        keyExtractor={(item) => item.id}
        renderItem={renderBookingItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
  bookingItem: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginBottom: 10,
  },
  bookingId: {
    fontWeight: "bold",
    fontSize: 16,
    flexBasis: "100%",
  },
  name: {
    marginVertical: 2,
    fontSize: 14,
    flexBasis: "100%",
  },
  location: {
    marginVertical: 2,
    fontSize: 14,
    flexBasis: "100%",
  },
  confirmationCode: {
    marginVertical: 2,
    fontSize: 14,
    fontStyle: "italic",
    flexBasis: "100%",
  },
  amount: {
    marginVertical: 2,
    fontSize: 14,
    color: "#4caf50",
    flexBasis: "100%",
  },
  description: {
    marginVertical: 2,
    fontSize: 14,
    color: "#757575",
    flexBasis: "100%",
  },
  refundable: {
    marginVertical: 2,
    fontSize: 14,
    fontWeight: "bold",
    color: "#f44336",
    flexBasis: "100%",
  },
  status: {
    marginVertical: 2,
    fontSize: 14,
    fontWeight: "bold",
    color: "#4caf50",
    flexBasis: "100%",
  },
});

export default AllBookingScreen;
