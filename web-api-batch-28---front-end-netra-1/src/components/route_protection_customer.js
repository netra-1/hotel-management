import { Navigate } from "react-router-dom";

function CustomerPrivateRoute({ children }) {
    var isAuth;
  if(localStorage.getItem('customerTicket')){
      isAuth= true
  }
  else{
      isAuth= false
  }
  return isAuth ? children : <Navigate to="/login" />;
}

export default CustomerPrivateRoute;