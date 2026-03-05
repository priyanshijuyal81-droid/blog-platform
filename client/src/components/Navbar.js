import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={styles.nav}>
      <h2>Blog Platform</h2>

      <div>
        <Link style={styles.link} to="/">Home</Link>

        {user ? (
          <>
            <Link style={styles.link} to="/create">Create Post</Link>
            <button onClick={logout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <Link style={styles.link} to="/login">Login</Link>
            <Link style={styles.link} to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    background: "#222",
    color: "#fff"
  },
  link: {
    marginRight: "15px",
    color: "#fff",
    textDecoration: "none"
  },
  button: {
    padding: "5px 10px",
    cursor: "pointer"
  }
};

export default Navbar;