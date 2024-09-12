import { Link } from "react-router-dom";
import { FormInput } from "../form/form-input";
import { FormButton } from "../form/form-button";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";
import { Error } from "../error";
import styled from "styled-components";

const FormContainer = styled.section`
    margin-bottom: 2rem;
`

const LostPasswordLink = styled(Link)`
    display: inline-block;
    color: #666;
    padding: .5rem 0;
    line-height: 1;

    &:after {
        content: '';
        height: 2px;
        width: 100%;
        background-color: currentColor;
        display: block;
    }
`
const SignUp = styled.div`
    margin-top: 4rem;

    h2 {
        line-height: 1;
        font-size: 2rem;
        font-family: var(--type-second);

        &:after {
            content: '';
            display: block;
            background-color: #ddd;
            height: 0.5rem;
            width: 3rem;
            margin-top: 0.25rem;
            border-radius: 4px;
        }
    }

    p {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }
`
const SignUpButton = styled(Link)`
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: #fb1;
    color: #764701;
    min-width: 8rem;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    transition: 0.1s;

    &:hover,
    &:focus {
        outline: none;
        box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }

    &:disabled {
        opacity: 0.5;
        cursor: wait;
    }
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
            <LostPasswordLink to="/login/lost-account">Can&apos;t remember the password?</LostPasswordLink>
            <SignUp>
                <h2>Register</h2>
                <p>Don&apos;t have an account yet? Sign up on the website.</p>
                <SignUpButton to="/login/create">Sign up</SignUpButton>
            </SignUp>
        </FormContainer>
    )
}