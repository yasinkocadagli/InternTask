import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";



const Auth = () => {

  const dispatch=useDispatch()
  const loginHandler=(event)=>{
    event.preventDefault()

    dispatch(authActions.login())

  }
  return (
    <main>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit" onClick={loginHandler}>Login</button>
      </form>
    </main>
  );
};

export default Auth;
