export const exerciseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_EXERCISES":
      return payload;
    case "CREATE_EXERCISE":
      return [...state, payload];
    default:
      return state;
  }
};

export const userReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_USERS":
      return payload;
    case "DELETE_USER":
      return [...state].filter((item) => item._id !== payload._id);
    default:
      return state;
  }
};

export const singleExerciseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case "FETCH_SINGLE_EXERCISE":
      return payload;
    case "RESET_SINGLE_EXERCISE":
      return [];
    default:
      return state;
  }
};
