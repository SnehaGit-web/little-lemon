// Safe fallback version that does not need window.fetchAPI
export const initializeTimes = () => {
  // Check if API is available
  if (window.fetchAPI) {
    const today = new Date();
    return window.fetchAPI(today);
  }
  // Fallback times if API not loaded
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      if (window.fetchAPI) {
        return window.fetchAPI(new Date(action.date));
      }
      return state;
    default:
      return state;
  }
};