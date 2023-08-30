import "../pages/list/list.scss"
import StaffDatatable from "./staffDataTable"

const CustomerAddList = ({columns}) => {
  return (
    <div className="list">
      <div className="listContainer">
        <StaffDatatable columns={columns}/>
      </div>
    </div>
  )
}

export default CustomerAddList