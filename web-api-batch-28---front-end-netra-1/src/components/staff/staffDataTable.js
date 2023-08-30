import "../datatable/datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { customerColumns } from "../datatable/datatablesource";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const StaffDatatable = ({columns}) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState({});
  const { data, loading, error } = useFetch(`http://localhost:90/${path}`);

  const config = {
    headers : {
        Authorization : "Bearer " + localStorage.getItem('staffTicket'),
    }
  }
  useEffect(() => {
    setList(data);
  }, [data]);


  const handleDelete = async (id) => {
    // console.log(id)
    try {
        await axios.delete(`http://localhost:90/${path}/${id}`, config)
        .then(()=>{
          toast.success('User deleted successfully')
        })
        .catch();
        setList(list.filter((item) => item._id !== id));
    } catch (err) {}
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <>
    <div className="datatable">
      <div className="datatableTitle">
        <h3 className="datatable_h2">{path}</h3>
        <Link to={`/${path}/new`} className="main-btn">
          Add New Customer
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
    <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
      />

    </>
  );
};

export default StaffDatatable;
