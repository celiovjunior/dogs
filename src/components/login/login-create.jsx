import styled from "styled-components"
import { FormInput } from "../form/form-input";
import { Button } from "../form/form-button";
import useForm from "../../hooks/useForm";
import { USER_POST } from "../../api";
import { useContext } from "react";
import { UserContext } from "../../contexts/user-context";

const LoginCreateSection = styled.section`

`

export function LoginCreate() {
    const username = useForm();
    const email = useForm('email');
    const password = useForm();

    const {userLogin} = useContext(UserContext)

    async function handleSubmit(event) {
        event.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
            // password_confirmation: password.value,
        })
        const response = await fetch(url, options)
        if (response.ok) userLogin(email.value, password.value)
        console.log(response)
    }

    return (
        <LoginCreateSection className="animeLeft">
            <h1 className="title">Register</h1>
            <form onSubmit={handleSubmit}>
                <FormInput label="User" type="text" name="username" {...username} />
                <FormInput label="Email" type="email" name="email" {...email}/>
                <FormInput label="Password" type="password" name="password" {...password} />
                <Button>Register</Button>
            </form>
        </LoginCreateSection>
    )
}