import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { useDispatch, useSelector } from "react-redux";
import { createExercise, fetchUsers } from "../actions/index";

import "react-datepicker/dist/react-datepicker.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
  select: {
    width: "120px",
  },
}));

const CreateExercise = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector((state) => state.users);
  const submitEvent = (e) => {
    e.preventDefault();
    const exercise = { username, description, duration, date };
    dispatch(createExercise(exercise));
    setUsername("");
    setDescription("");
    setDate(new Date());
    setDuration(null);
    window.location = "/";
  };

  const classes = useStyles();

  return (
    <Container>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(e) => submitEvent(e)}
      >
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Username</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={username}
            className={classes.select}
            onChange={(e) => setUsername(e.target.value)}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {users.length > 1 &&
              users.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.username}>
                    {item.username}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-textarea"
            label="Exercise Description"
            type="text"
            multiline
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <TextField
            id="standard-basic"
            label="Duration (as minute)"
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </FormControl>
        <br />
        <FormControl className={classes.formControl}>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={date}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>
        <br />
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
    </Container>
  );
};

export default CreateExercise;
