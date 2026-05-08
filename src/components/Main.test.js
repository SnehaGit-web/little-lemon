import { initializeTimes, updateTimes } from "./bookingUtils";

// Mock window.fetchAPI for tests
beforeEach(() => {
  window.fetchAPI = jest.fn((date) => {
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];
  });
});

// Test initializeTimes calls fetchAPI with today's date
test("initializeTimes returns available times from API", () => {
  const times = initializeTimes();
  expect(window.fetchAPI).toHaveBeenCalled();
  expect(times).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
});

// Test updateTimes calls fetchAPI with selected date
test("updateTimes returns updated times from API", () => {
  const currentState = ["17:00", "18:00"];
  const action = {
    type: "UPDATE_TIMES",
    date: "2026-05-10"
  };
  const result = updateTimes(currentState, action);
  expect(window.fetchAPI).toHaveBeenCalledWith(
    new Date("2026-05-10")
  );
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
});

// Test updateTimes returns same state for unknown action
test("updateTimes returns same state for unknown action", () => {
  const currentState = ["17:00", "18:00", "19:00"];
  const action = { type: "UNKNOWN_ACTION" };
  const result = updateTimes(currentState, action);
  expect(result).toEqual(currentState);
});