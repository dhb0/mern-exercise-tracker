import axios from "axios";

export const fetchExercises = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:5000/exercises")
      .then((response) =>
        dispatch({
          type: "FETCH_EXERCISES",
          payload: response.data.map((item) => ({
            ...item,
            id: item._id,
          })),
        })
      )
      .catch((err) => console.log(err));
  };
};

export const fetchSingleExercise = (id) => {
  return async (dispatch) => {
    await axios
      .get(`http://localhost:5000/exercises/${id}`)
      .then((response) =>
        dispatch({
          type: "FETCH_SINGLE_EXERCISE",
          payload: response.data
        })
      )
      .catch((err) => console.log(err));
  };
};

export const createExercise = (exercise) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((response) =>
        dispatch({
          type: "CREATE_EXERCISE",
          payload: response.data.map((item) => ({
            ...item,
            id: item._id,
          })),
        })
      )
      .catch((err) => console.log(err));
  };
};

export const editExercise = (id, newExercise) => {
  return async (dispatch) => {
    await axios
      .post(`http://localhost:5000/exercises/edit/${id}`, newExercise)
      .then((response) =>
        dispatch({
          type: "EDIT_EXERCISE",
          payload: response.data.map((item) => ({
            ...item,
            id: item._id,
          })),
        })
      )
      .catch((err) => console.log(err));
  };
};

export const deleteExercise = (id) => {
  return async (dispatch) => {
    await axios
      .delete(`http://localhost:5000/exercises/delete/${id}`)
      .then((response) =>
        dispatch({
          type: "DELETE_POST",
          payload: response.data,
        })
      )
      .catch((err) => console.log(err));
  };
};
