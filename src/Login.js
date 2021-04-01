import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { getDefaultNormalizer } from "@testing-library/dom";

export function Login() {
  const loginkey = "login-key";
  const [values, handleValues] = useLogin(loginkey, {
    email: "",
    password: "",
  }); 

  const handleLogin = () => {
    const emailInput = document.getElementById('email-input').value;
    const passwordInput = document.getElementById('password-input').value;
    const loginBtn = document.getElementById('login-btn');

    const url = `http://localhost:9000/login/?email=${emailInput}&password=${passwordInput}`;
    Axios.get(url)
      .then((res) => {
          if(res.data.status === 200 && res.data.data[0]['COUNT(*)'] > 0) {
            console.log(res.data.data[0]['COUNT(*)']);
          }
          else
            console.log(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
  }
  
  const isValidEmail = (e) => {
    let value = e.target.value.toLowerCase();
    let emailPattern = new RegExp("^([a-z0-9]{3,25})@([a-z]{2,10}).([a-z]{2,5})$");
    let result = emailPattern.test(value);
    console.log("Regex result : ",result);

    // rubeshravan123@gmail.com
  }
 
  return (
    <div className="login">
      <div className="login-panel">
        <TextField
          type="email"
          fullWidth
          onChange={(e) => {
            handleValues(e);
            isValidEmail(e);
          }}
          value={values.email}
          name="email"
          id="email-input"
          label="Email id"
          variant="outlined"
        />
        <TextField
          type="password"
          fullWidth
          value={values.password}
          onChange={(e) => {
            handleValues(e);
          }}
          name="password"
          id="password-input"
          label="Password"
          variant="outlined"
        />
        <Button
          id="login-btn"
          variant="contained"
          size="medium"
          color="primary"
          onClick={() => {handleLogin()}}
        >
          Login
        </Button>

        <span>
          Don't have an account ? <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
}
