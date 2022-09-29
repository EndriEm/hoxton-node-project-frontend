import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div>
      <Header />
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <input
              type="email"
              name="email"
              placeholder="email"
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
            />
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
            />
            <button>Rregjistrohu</button>
            <p className="message">
              I rregjistruar? <Link to="/sign-in">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
