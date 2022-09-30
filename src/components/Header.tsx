import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <div className="nav">
        <div className="topnav">
          <Link to="/kryefaqja">Home</Link>
          <Link to="/fakulteti">Faculties</Link>
          <Link to="/deget">Faculty Branches</Link>
          <Link to="/forumi">Forum</Link>
          <Link to="/rreth-nesh">About us</Link>
          <div className="login-container">
            <Link to="/sign-in">
              <button className="button">Log out</button>
            </Link>
          </div>
          <div className="login-container">
            <Link to="/sign-in">
              <button className="button">Log in</button>
            </Link>
          </div>
          <div className="login-container">
            <div className="username"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
