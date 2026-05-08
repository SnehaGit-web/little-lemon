import { initializeTimes, updateTimes } from "./bookingUtils";

// Mock window.fetchAPI before all tests
beforeEach(() => {
  window.fetchAPI = jest.fn((date) => {
    // Returns a non-empty array of available times
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

// Clean up after each test
afterEach(() => {
  jest.clearAllMocks();
});

// Test 1 — initializeTimes calls fetchAPI and returns times
test("initializeTimes returns a non-empty array of available times", () => {
  const times = initializeTimes();
  
  // Verify fetchAPI was called
  expect(window.fetchAPI).toHaveBeenCalled();
  
  // Verify result is an array
  expect(Array.isArray(times)).toBe(true);
  
  // Verify array is not empty
  expect(times.length).toBeGreaterThan(0);
  
  // Verify correct times returned
  expect(times).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
});

// Test 2 — updateTimes calls fetchAPI with selected date
test("updateTimes returns updated times for the selected date", () => {
  const currentState = [
    "17:00",
    "18:00",
    "19:00"
  ];
  
  // Dispatch includes the selected date
  const action = {
    type: "UPDATE_TIMES",
    date: "2026-05-16"
  };
  
  const result = updateTimes(currentState, action);
  
  // Verify fetchAPI was called with correct date
  expect(window.fetchAPI).toHaveBeenCalledWith(
    new Date("2026-05-16")
  );
  
  // Verify result is a non-empty array
  expect(Array.isArray(result)).toBe(true);
  expect(result.length).toBeGreaterThan(0);
  
  // Verify correct times returned
  expect(result).toEqual([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);
});

// Test 3 — updateTimes returns same state for unknown action
test("updateTimes returns same state for unknown action type", () => {
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
  
  // fetchAPI should NOT be called for unknown actions
  expect(window.fetchAPI).not.toHaveBeenCalled();
  
  // State should remain unchanged
  expect(result).toEqual(currentState);
});