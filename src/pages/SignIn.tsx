import { Header } from "../components/Header";
import { Link } from "react-router-dom";

export function SignIn() {
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
            <button>login</button>
            <p className="message">
              Jo i rregjistruar? <Link to="/signup">Rregjistrohu</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
