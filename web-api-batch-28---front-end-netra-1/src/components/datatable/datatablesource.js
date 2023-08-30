export const categoryColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "category_name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "short_desc",
    headerName: "Featured Description",
    width: 250,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 310,
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
  },
  {
    field: "featured",
    headerName: "Featured",
    width: 130,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "room_title",
    headerName: "Name",
    width: 200,
  },
  {
    field: "room_desc",
    headerName: "Description",
    width: 300,
  },
  {
    field: "room_price",
    headerName: "Price",
    width: 150,
  },
  {
    field: "max_people",
    headerName: "Max People",
    width: 150,
  },
];

export const foodCategoryColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "category_name",
    headerName: "Category Name",
    width: 200,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
];


export const foodColumns = [
  { field: "_id", headerName: "ID", width: 215 },
  {
    field: "food_name",
    headerName: "Food Name",
    width: 170,
  },
  {
    field: "food_category",
    headerName: "Category Name",
    width: 170,
  },
  {
    field: "short_desc",
    headerName: "Featured Description",
    width: 200,
  },
  {
    field: "food_desc",
    headerName: "Description",
    width: 300,
  },
  {
    field: "food_price",
    headerName: "Price",
    width: 100,
  },
];

export const staffColumns = [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.fname + '  ' + params.row.lname}
        </div>
      );
    },
  },
  {
    field: "username",
    headerName: "Username",
    width: 135,
  },
  {
    field: "email",
    headerName: "Email address",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 115,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "department",
    headerName: "Department",
    width: 120,
  },
];


export const customerColumns = [
  { field: "_id", headerName: "ID", width: 200 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.image || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.fname + '  ' + params.row.lname}
        </div>
      );
    },
  },
  {
    field: "username",
    headerName: "Username",
    width: 135,
  },
  {
    field: "email",
    headerName: "Email address",
    width: 200,
  },
  {
    field: "address",
    headerName: "Address",
    width: 115,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 120,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 120,
  },
];