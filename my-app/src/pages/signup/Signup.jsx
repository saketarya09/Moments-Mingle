import "./signup.scss"
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  return (
    <div className="signup">
      <div className="card">
      <div className="left">
          <h1>Moments Mingle</h1>
          <p>Celebrate life's highlights with Moments Mingle. Start sharing your stories today and let Moments Mingle be your gateway to a world of shared experiences.</p>
            <span>Already have an account?</span>
            <Link to="/Login">
            <button>Login</button>
            </Link>
        </div>
        <div className="right">
          <h1>Sign up</h1>
          <form>
            <input type="text" placeholder="username"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <input type="text" placeholder="Name"></input>
            <button>Sign up</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
