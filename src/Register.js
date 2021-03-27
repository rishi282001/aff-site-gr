import { useLogin } from "./useLogin";
import { Link } from "react-router-dom";

export function Register() {
    const registerKey = 'reg-key';
    const[values,handleValues] = useLogin(registerKey,{email: '', password: '', conpassword: ''});

    console.log('Register values',values);

    return(
        <div className="register">
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
                    <td>
                        <input type="password"  size="30" value={values.conpassword} onChange={(e) => {handleValues(e)}} name="conpassword" id="password-input" placeholder="Confirm Password" />
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" align="center">
                        <button id="reg-btn"> Register </button>
                    </td>
                </tr>
                <tr>
                    <td colSpan="2" align="center">
                        Already have an account ? <Link to="/login">Login</Link>
                    </td>
                </tr>
            </table>
        </div>
    );
}