import { Link } from "react-router-dom";
import { FormInput } from "../form/form-input";
import { FormButton } from "../form/form-button";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { Error } from "../error";
import styled from "styled-components";

const FormContainer = styled.section`

`

export function LoginForm() {
    const username = useForm('email')
    const password = useForm()

    const {userLogin, error, loading} = useContext(UserContext)
    
    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value)
        }
    }

    return (
        <FormContainer className="animeLeft">
            <h1 className="title">Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <FormInput label="User" type="text" name="username" {...username} />
                <FormInput label="Password" type="password" name="password" {...password} />
                
                {loading 
                ? <FormButton disabled>Loading</FormButton>
                : <FormButton>Login</FormButton>}
                
                <Error error={error} />
            </form>
            <Link to="/login/lost-account">Can&apos;t remember the password</Link>
            <Link to="/login/create">Sign up</Link>
        </FormContainer>
    )
}