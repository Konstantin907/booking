import { useContext } from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  //console.log(user);
  const navigate = useNavigate();
<<<<<<< HEAD
=======

>>>>>>> 961ca77e82629da6d22b4f8c3a997133192454df

  // const onRent = useCallback(()=>{
  //   if(!user) {
  //     navigate("/login")
  //   }
  //   //suprotno
  //   rentModal.onOpen();

  // }, [user, navigate])

<<<<<<< HEAD
=======

>>>>>>> 961ca77e82629da6d22b4f8c3a997133192454df
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <span className="logo">StayAway</span>
        </Link>

        {/* //if user is logged in */}
        {user ? (
          <>
<<<<<<< HEAD
            <span className="userName">
              Welcome Back, {user.details.firstName}{" "}
            </span>
            <div className="btn-container">
              {user.isAdmin === true ? (
                <p
                  className="adminAccess"
                  onClick={() => navigate("/dashBoardAdmin")}
                >
                  Admin Panel
                  <span>&#10132;</span>
                </p>
              ) : null}
=======
            <div className="nav-button">
              
              <Link to={`/profile/${user._id}`}>
                <button className="logoutBtn">Hey! {user.username ? user.username : user.firstName + ' ' + user.lastName} 😊</button>
              </Link>
>>>>>>> 961ca77e82629da6d22b4f8c3a997133192454df
              <button className="logoutBtn" onClick={handleLogout}>
                Log out
              </button>
            </div>
          </>
        ) : (
          <div className="navItems">
            <Link to="/register">
              <button className="navButton">Register</button>
            </Link>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
