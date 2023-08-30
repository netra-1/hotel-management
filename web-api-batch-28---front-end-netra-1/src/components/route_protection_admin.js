import { Navigate } from "react-router-dom";

function AdminPrivateRoute({ children }) {
    var isAuth;
  if(localStorage.getItem('adminTicket')){
      isAuth= true
  }
  else{
      isAuth= false
  }
  return isAuth ? children : <Navigate to="/login" />;
}

export default AdminPrivateRoute;