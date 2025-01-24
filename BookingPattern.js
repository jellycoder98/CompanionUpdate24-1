class BookingPattern {
  constructor(
    id,
    name,
    location,
    confirmationCode,
    amountPaid,
    description,
    refundable,
    status,
    companionProfileImage, // New field for companion profile image
    guestProfileImage // New field for guest profile image
  ) {
    this.id = id; // Booking ID
    this.name = name; // Name of the guest
    this.location = location; // Meet-up location
    this.confirmationCode = confirmationCode; // One-time confirmation code
    this.amountPaid = amountPaid; // Amount that the guest paid
    this.description = description; // Short description of the meet-up
    this.refundable = refundable; // Is refundable (true/false)
    this.status = status; // Status of the booking
    this.companionProfileImage = companionProfileImage; // Companion profile image path
    this.guestProfileImage = guestProfileImage; // Guest profile image path
  }
}

export default BookingPattern;
