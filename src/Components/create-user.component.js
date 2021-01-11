import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import { createUser, fetchUsers, deleteUser } from "../actions/index";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    padding: "10px 15px",
  },
}));

const CreateUser = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  const [username, setUsername] = useState("");
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchUsers());
  });

  const submitEvent = (e) => {
    e.preventDefault();
    const user = { username };
    dispatch(createUser(user));
    setUsername("");
  };

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
  };
  return (
    <Container>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => submitEvent(e)}
      >
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-textarea"
            label="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
          type="submit"
        >
          Send
        </Button>
      </form>
      {users !== []
        ? users.map((item, index) => {
            return (
              <Chip
                icon={<FaceIcon />}
                label={item.username}
                onDelete={() => handleDelete(item._id)}
                color="secondary"
                key={index}
              />
            );
          })
        : "LOADING"}
    </Container>
  );
};

export default CreateUser;
