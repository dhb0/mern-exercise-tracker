import React, { useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./Components/navbar.component";
import ExercisesList from "./Components/exercises-list.component";
import EditExercise from "./Components/edit-exercise.component";
import CreateUser from "./Components/create-user.component";
import CreateExercise from "./Components/create-exercise.component";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { fetchExercises } from "./actions/index";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchExercises());
  });
  
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <div className={classes.root}>
        <Route exact path="/" component={ExercisesList}></Route>
        <Route path="/edit/:id" component={EditExercise}></Route>
        <Route path="/create" component={CreateExercise}></Route>
        <Route path="/user" component={CreateUser}></Route>
      </div>
    </BrowserRouter>
  );
};

export default App;
