import LocationReview from "../assets/videos/Location review.mp4";
import LocationTracking from "../assets/videos/Location tracking.mp4";
import OnlineCalendar from "../assets/videos/Online calendar.mp4";

export const OnboardingSlides: OnboardingSlidesProps[] = [
  {
    id: "1",
    title: "Discover Nearby Salons",
    description:
      "Find salons near you, explore their services, and pick your favorite barbers",
    image: LocationReview,
  },
  {
    id: "2",
    title: "Book Appointments with Ease",
    description:
      "Choose a barber, check their availability, and book in just a few taps.",
    image: LocationTracking,
  },
  {
    id: "3",
    title: "Track and Manage Your Appointments",
    description:
      "View your booking history, receive appointment codes, and stay on top of your schedule",
    image: OnlineCalendar,
  },
];
