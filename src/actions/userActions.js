import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:5000/users")
      .then((response) =>
        dispatch({
          type: "FETCH_USERS",
          payload: response.data,
        })
      )
      .catch((err) => console.log(err));
  };
};

export const createUser = (user) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:5000/users/add", user)
      .then((response) =>
        dispatch({
          type: "CREATE_USER",
          payload: response.data,
        })
      )
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
    return async (dispatch) => {
      await axios
        .delete(`http://localhost:5000/users/delete/${id}`)
        .then((response) =>
          dispatch({
            type: "DELETE_USER",
            payload: response.data,
          })
        )
        .catch((err) => console.log(err));
    };
  };
  