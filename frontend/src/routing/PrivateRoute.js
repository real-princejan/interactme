import { useNavigate, Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      element={
        localStorage.getItem("authToken") ? (
          <Component />
        ) : (
          <Navigate to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
