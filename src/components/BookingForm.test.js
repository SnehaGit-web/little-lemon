import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

const mockAvailableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];
const mockDispatch = jest.fn();
const mockSubmitForm = jest.fn();

const renderBookingForm = () => {
  render(
    <BookingForm
      availableTimes={mockAvailableTimes}
      dispatch={mockDispatch}
      submitForm={mockSubmitForm}
    />
  );
};

afterEach(() => {
  jest.clearAllMocks();
});

// HTML5 validation attributes
test("date input has required attribute", () => {
  renderBookingForm();
  expect(screen.getByLabelText(/choose date/i)).toHaveAttribute("required");
});

test("date input has min attribute set to today", () => {
  renderBookingForm();
  const today = new Date().toISOString().split("T")[0];
  expect(screen.getByLabelText(/choose date/i)).toHaveAttribute("min", today);
});

test("time select has required attribute", () => {
  renderBookingForm();
  expect(screen.getByLabelText(/choose time/i)).toHaveAttribute("required");
});

test("guests input has required attribute", () => {
  renderBookingForm();
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute("required");
});

test("guests input has min attribute of 1", () => {
  renderBookingForm();
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute("min", "1");
});

test("guests input has max attribute of 10", () => {
  renderBookingForm();
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute("max", "10");
});

test("guests input has type number", () => {
  renderBookingForm();
  expect(screen.getByLabelText(/number of guests/i)).toHaveAttribute("type", "number");
});

test("date input has type date", () => {
  renderBookingForm();
  expect(screen.getByLabelText(/choose date/i)).toHaveAttribute("type", "date");
});

// React validation tests
test("submit button is disabled when form is empty", () => {
  renderBookingForm();
  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i
  });
  expect(submitButton).toHaveStyle("opacity: 0.5");
});

test("submit button is enabled when all fields are valid", () => {
  renderBookingForm();
  const today = new Date().toISOString().split("T")[0];
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: today } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
  expect(
    screen.getByRole("button", { name: /make your reservation/i })
  ).not.toBeDisabled();
});

test("shows error when date is not selected", () => {
  renderBookingForm();
  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));
  expect(screen.getByText(/please select a date/i)).toBeInTheDocument();
});

test("shows error when time is not selected", () => {
  renderBookingForm();
  const today = new Date().toISOString().split("T")[0];
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: today } });
  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));
  expect(screen.getByText(/please select a time/i)).toBeInTheDocument();
});

test("shows error when guests is less than 1", () => {
  renderBookingForm();
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "0" } });
  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));
  expect(screen.getByText(/minimum 1 guest/i)).toBeInTheDocument();
});

test("shows error when guests exceeds 10", () => {
  renderBookingForm();
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "11" } });
  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));
  expect(screen.getByText(/maximum 10 guests/i)).toBeInTheDocument();
});

test("submitForm called with correct data when valid", () => {
  renderBookingForm();
  const today = new Date().toISOString().split("T")[0];
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: today } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: "18:00" } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: "4" } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: "Birthday" } });
  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));
  expect(mockSubmitForm).toHaveBeenCalledWith({
    date: today,
    time: "18:00",
    guests: "4",
    occasion: "Birthday"
  });
});

test("submitForm not called when form is invalid", () => {
  renderBookingForm();
  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));
  expect(mockSubmitForm).not.toHaveBeenCalled();
});

test("renders all available times as options", () => {
  renderBookingForm();
  mockAvailableTimes.forEach((time) => {
    expect(screen.getByText(time)).toBeInTheDocument();
  });
});

test("dispatch called when date changes", () => {
  renderBookingForm();
  const today = new Date().toISOString().split("T")[0];
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: today } });
  expect(mockDispatch).toHaveBeenCalledWith({
    type: "UPDATE_TIMES",
    date: today
  });
});