import "./login.scss"
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Moments Mingle</h1>
          <p>Celebrate life's highlights with Moments Mingle. Start sharing your stories today and let Moments Mingle be your gateway to a world of shared experiences.</p>
            <span>Don't you have an account?</span>
            <Link to="/Signup">
            <button>Sign up</button>
            </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="username"></input>
            <input type="password" placeholder="Password"></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
