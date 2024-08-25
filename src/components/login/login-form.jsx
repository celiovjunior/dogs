import { Link } from "react-router-dom";
import { FormInput } from "../form/form-input";
import { FormButton } from "../form/form-button";
import useForm from "../../hooks/useForm";
import { TOKEN_POST, USER_GET } from "../../api";
import { useEffect } from "react";

export function LoginForm() {
    const username = useForm('email')
    const password = useForm()

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if (token) {
            getUser(token);
        } else {
            console.log('No token found');
        }
    }, [])

    async function getUser(token) {
        const { url, options } = USER_GET(token)
        const response = await fetch(url, options)
        const json = await response.json();
        console.log(json);
    }

    async function handleSubmit(event) {
        event.preventDefault();

        if (username.validate() && password.validate()) {
            const {url, options} = TOKEN_POST({
                username: username.value,
                password: password.value
            });

            const response = await fetch(url, options)
            const json = await response.json();

            window.localStorage.setItem('token', json.token);

            getUser(json.token);
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <FormInput label="User" type="text" name="username" {...username} />
                <FormInput label="Password" type="password" name="password" {...password} />
                
                <FormButton>Login</FormButton>
            </form>
            <Link to="/login/create">Sign up</Link>
        </section>
    )
}