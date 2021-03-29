import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function Login() {
    const loginkey = 'login-key';
    const[values,handleValues] = useLogin(loginkey,{email: '', password: ''});

    return (
        <div className="login">
            <div className="login-panel">
                <TextField type="email" fullWidth onChange={(e) => {handleValues(e);}}  value={values.email} name="email" id="email-input" label="Email id" variant="outlined" />
                <TextField type="password" fullWidth value={values.password} onChange={(e) => {handleValues(e)}} name="password" id="password-input" label="Password" variant="outlined" />
                <Button id="login-btn" variant="contained" size="medium" color="primary">
                    Login
                </Button>
                <span>
                    Don't have an account ? <Link to="/register">Register</Link>
                </span>
            </div>
        </div>
    );
}