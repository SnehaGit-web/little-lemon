// Initialize available times
export const initializeTimes = () => {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
};

// Reducer to update available times
export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ];
    default:
      return state;
  }
};