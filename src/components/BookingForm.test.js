import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Mock props required by BookingForm
const availableTimes = [
  "17:00",
  "18:00", 
  "19:00",
  "20:00",
  "21:00"
];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

// Test 1 — static text renders correctly
test("Renders the BookingForm heading", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
});
// Test that all form labels render
test("renders the date label", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  expect(
    screen.getByText(/choose date/i)
  ).toBeInTheDocument();
});

test("renders the time label", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  expect(
    screen.getByText(/choose time/i)
  ).toBeInTheDocument();
});

test("renders the guests label", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  expect(
    screen.getByText(/number of guests/i)
  ).toBeInTheDocument();
});

test("renders the occasion label", () => {
  render(
    <BookingForm
      availableTimes={availableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
  expect(
    screen.getByText(/occasion/i)
  ).toBeInTheDocument();
});