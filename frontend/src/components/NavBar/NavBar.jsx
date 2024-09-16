import { Link } from 'react-router-dom';
import * as authService from '../../services/authService';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    authService.logOut();
    setUser(null);
  }

  return (
    <nav className="NavBar">
      <Link to="/">HOME</Link>
      &nbsp; | &nbsp;
      {user ? (
        <>
          <Link to="/touches">PLAYER SESSIONS</Link>
          &nbsp; | &nbsp;
          <Link to="/touches/new">NEW SESSIONS</Link>
          &nbsp; | &nbsp;
          <Link to="" onClick={handleLogOut}>
            LOG OUT
          </Link>
          &nbsp;&nbsp;
          <span>Welcome, {user.name}</span>
        </>
      ) : (
        <>
          <Link to="/login">SIGN IN</Link>
          &nbsp; | &nbsp;
          <Link to="/signup">SIGN UP</Link>
        </>
      )}
    </nav>
  );
}
