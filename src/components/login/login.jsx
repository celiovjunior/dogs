import { Route, Routes } from "react-router-dom";
import { LoginForm } from "./login-form";
import { LoginLostPassword } from "./login-lost-password";
import { LoginCreate } from "./login-create";
import { LoginResetPassword } from "./login-reset-password";

export function Login() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="create" element={<LoginCreate />} />
                <Route path="lost-password" element={<LoginLostPassword />} />
                <Route path="reset-password" element={<LoginResetPassword />} />
            </Routes>
        </div>
    )
}