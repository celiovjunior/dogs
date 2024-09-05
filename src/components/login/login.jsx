import { Navigate, Route, Routes } from "react-router-dom";
import { LoginForm } from "./login-form";
import { LoginLostPassword } from "./login-lost-password";
import { LoginCreate } from "./login-create";
import { LoginResetPassword } from "./login-reset-password";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import styled from "styled-components";

const LoginDiv = styled.div``

const StyledForms = styled.div``

export function Login() {
    const { login } = useContext(UserContext)

    if(login === true) return <Navigate to="/account" />

    return(
        <LoginDiv>
            <StyledForms>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="create" element={<LoginCreate />} />
                    <Route path="lost-password" element={<LoginLostPassword />} />
                    <Route path="reset-password" element={<LoginResetPassword />} />
                </Routes>
            </StyledForms>
        </LoginDiv>
    )
}