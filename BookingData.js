import BookingCategory from "../../Models/BookingCategory";
import BookingPattern from "../../Models/BookingPattern";

// Dummy data using BookingCategory and BookingPattern
const ALL_BOOKINGS = [
  new BookingPattern(
    "B001",
    "John Doe",
    "Central Park, NYC",
    "12345",
    200.0,
    "Lunch meet-up at Central Park",
    false,
    "Pending",
    "/Users/nigelling/mmv2/ProfileDummyImages/3ffba6fb364e3be6ad1dd0c4271f10ed.jpg", // Companion profile image
    "/Users/nigelling/mmv2/ProfileDummyImages/7059c8b9e07720ec1d0af574892f2ca2.jpg" // Guest profile image
  ),
  new BookingPattern(
    "B002",
    "Jane Smith",
    "Times Square, NYC",
    "67890",
    150.0,
    "Dinner at Times Square",
    true,
    "Upcoming",
    "/Users/nigelling/mmv2/ProfileDummyImages/3ffba6fb364e3be6ad1dd0c4271f10ed.jpg",
    "/Users/nigelling/mmv2/ProfileDummyImages/7059c8b9e07720ec1d0af574892f2ca2.jpg"
  ),
  new BookingPattern(
    "B003",
    "Emily Johnson",
    "Empire State Building, NYC",
    "54321",
    300.0,
    "Evening photography session",
    false,
    "Cancelled",
    "/Users/nigelling/mmv2/ProfileDummyImages/3ffba6fb364e3be6ad1dd0c4271f10ed.jpg",
    "/Users/nigelling/mmv2/ProfileDummyImages/7059c8b9e07720ec1d0af574892f2ca2.jpg"
  ),
  new BookingPattern(
    "B004",
    "Michael Brown",
    "Brooklyn Bridge, NYC",
    "98765",
    250.0,
    "Morning walk across the Brooklyn Bridge",
    true,
    "Discussing",
    "/Users/nigelling/mmv2/ProfileDummyImages/3ffba6fb364e3be6ad1dd0c4271f10ed.jpg",
    "/Users/nigelling/mmv2/ProfileDummyImages/7059c8b9e07720ec1d0af574892f2ca2.jpg"
  ),
  new BookingPattern(
    "B005",
    "Sarah Connor",
    "Statue of Liberty, NYC",
    "19283",
    400.0,
    "Tour of the Statue of Liberty",
    false,
    "Successful",
    "/Users/nigelling/mmv2/ProfileDummyImages/3ffba6fb364e3be6ad1dd0c4271f10ed.jpg",
    "/Users/nigelling/mmv2/ProfileDummyImages/7059c8b9e07720ec1d0af574892f2ca2.jpg"
  ),
];

// Booking categories (optional, if needed)
const BOOKING_CATEGORIES = [
  new BookingCategory("C001", "Lunch Meet-Up", "Bookings for lunch meet-ups"),
  new BookingCategory("C002", "Dinner Meet-Up", "Bookings for dinner meet-ups"),
  new BookingCategory(
    "C003",
    "Photography",
    "Bookings for photography-related activities"
  ),
];

export { ALL_BOOKINGS, BOOKING_CATEGORIES };
