// Default times to use when API is not available
const defaultTimes = [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00"
];

// Initialize times using fetchAPI for today's date
export const initializeTimes = () => {
  if (typeof window.fetchAPI === "function") {
    const today = new Date();
    return window.fetchAPI(today);
  }
  // Return default times if API not loaded
  return defaultTimes;
};

// Update times using fetchAPI for selected date
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      if (typeof window.fetchAPI === "function") {
        return window.fetchAPI(new Date(action.date));
      }
      return defaultTimes;
    default:
      return state;
  }
};