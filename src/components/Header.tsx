import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <div className="nav">
        <div className="topnav">
          <Link to="/kryefaqja">Kryefaqja</Link>
          <Link to="/fakulteti">Fakultetet</Link>
          <Link to="/deget">Deget e Fakulteteve</Link>
          <Link to="/forumi">Forumi</Link>
          <Link to="/rreth-nesh">Rreth nesh</Link>
          <div className="login-container">
            <Link to="/sign-in">
              <button className="button">Hyr</button>
            </Link>
          </div>
          <div className="login-container">
            <Link to="/sign-in">
              <button className="button">Dil</button>
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
