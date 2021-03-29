import { useLogin } from "./useLogin";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export function Register() {
    const registerKey = 'reg-key';
    const[values,handleValues] = useLogin(registerKey,{email: '', password: '', conpassword: ''});

    return(
        <div className="register">
            <div className="register-panel">
                <TextField type="email" fullWidth value={values.email} onChange={(e) => {handleValues(e)}} name="email" id="email-input" label="Email id" variant="outlined" />
                <TextField  type="password" fullWidth value={values.password} onChange={(e) => {handleValues(e)}} name="password" id="password-input" label="Password" variant="outlined" />
                <TextField type="password" fullWidth value={values.conpassword} onChange={(e) => {handleValues(e)}} name="conpassword" id="password-input" label="Confirm Password" variant="outlined" />
                <Button id="reg-btn" variant="contained" size="medium" color="primary">
                    Register
                </Button>
                <span>
                    Already have an account ? <Link to="/login">Login</Link>
                </span>
            </div>
        </div>
    );
}