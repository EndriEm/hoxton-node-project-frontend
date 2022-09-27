import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <Link to="/home">
        <h1>
          <b>LOGO</b>
        </h1>
      </Link>
      <Link to="/discussions">
        <h2 >Discussions</h2>
      </Link>
      <a className="sign-button">
        <Link to="/sign-in">
          <button className="sign-button1">Sign In</button>
        </Link>
      </a>
      <a className="sign-button">
        <Link to="/sign-up">
          <button className="sign-button1">Sign Up</button>
        </Link>
      </a>
    </div>
  );
}
