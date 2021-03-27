import { Link } from "react-router-dom";
import { useLogin } from "./useLogin";

export function Login() {
    const loginkey = 'login-key';
    const[values,handleValues] = useLogin(loginkey,{email: '', password: ''});

    return (
        <div className="login">
            <table cellPadding="15">
                <tr>
                    <td>
                        <input type="email" size="30" value={values.email} onChange={(e) => {handleValues(e)}} name="email" id="email-input" placeholder="Email id" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password"  size="30" value={values.password} onChange={(e) => {handleValues(e)}} name="password" id="password-input" placeholder="Password" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" align="center">
                        <button id="login-btn"> Login </button>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" align="center">
                        Don't have an account ? <Link to="/register">Register here</Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}