import { Navigate } from "react-router-dom";

function StafPrivateRoute({ children }) {
    var isAuth;
  if(localStorage.getItem('staffTicket')){
      isAuth= true
  }
  else{
      isAuth= false
  }
  return isAuth ? children : <Navigate to="/login" />;
}

export default StafPrivateRoute;