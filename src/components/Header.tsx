import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <div className="nav">
        <div className="topnav">
          <Link to="/home">Home</Link>
          <Link to="/deget">Deget e Fakulteteve</Link>
          <Link to="/forumi">Forumi</Link>
          <Link to="/about">Rreth nesh</Link>
          <div className="login-container">
            <Link to="/login">
              <button className="button">Log in</button>
            </Link>
          </div>
          <div className="login-container">
            <Link to="/login">
              <button className="button">Log out</button>
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
