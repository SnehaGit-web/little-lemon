import { initializeTimes, updateTimes } from "./bookingUtils";

// Test initializeTimes
test("initializeTimes returns correct initial times", () => {
  const expectedTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
});

// Test updateTimes returns same state
test("updateTimes returns the same value provided in state", () => {
  const currentState = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
  const action = {
    type: "UPDATE_TIMES",
    date: "2026-05-10"
  };
  const result = updateTimes(currentState, action);
  expect(result).toEqual(currentState);
});

// Test updateTimes default case
test("updateTimes returns same state for unknown action", () => {
  const currentState = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
  const action = { type: "UNKNOWN_ACTION" };
  const result = updateTimes(currentState, action);
  expect(result).toEqual(currentState);
});