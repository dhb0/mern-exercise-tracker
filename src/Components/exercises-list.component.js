import React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";

const Exercises = () => {
  const { exercises } = useSelector((state) => state);

  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "username", headerName: "User Name", width: 130 },
    {
      field: "description",
      headerName: "Exercise Description",
      description: "This column has a value getter and is not sortable.",
      width: 500,
    },
    {
      field: "date",
      headerName: "Exercise Date",
      width: 120,
    },
    {
      field: "createdAt",
      headerName: "Created At",
      width: 120,
    },
    {
      field: "updatedAt",
      headerName: "Updated At",
      width: 120,
    },
    {
      field: "_id",
      headerName: "Edit",
      width: 150,
      renderCell: (params) => (
        <Link to={{ pathname: `edit/${params.value}` }}>
          <Button
            variant="contained"
            color="primary"
            onClick={console.log(params)}
          >
            EDIT
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <>
      <CssBaseline />
      <div style={{ height: 400, width: "90%", margin: "auto" }}>
        {exercises !== [] && (
          <DataGrid
            rows={exercises}
            columns={columns}
            pageSize={5}
            checkboxSelection
          />
        )}
      </div>
    </>
  );
};

export default Exercises;
