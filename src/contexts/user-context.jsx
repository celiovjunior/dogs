import { createContext, useCallback, useEffect, useState } from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export function UserStorage({ children }) {
    const [data, setData] = useState(null)
    const [login, setLogin] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()

    const userLogout = useCallback(
        async function userLogout() {
            setData(null)
            setError(null)
            setLoading(false)
            setLogin(false)
            window.localStorage.removeItem('token')
    
            navigate('/login')
        }, [navigate]
    ) 
    
    useEffect(() => {
        async function autoLogin() {
            const token = window.localStorage.getItem('token')
            if (token) {
                try {
                    setError(null)
                    setLoading(true)

                    const { url, options } = TOKEN_VALIDATE_POST(token)
                    const response = await fetch(url, options)
                    
                    if (!response.ok) throw new Error('Invalid token')
                    await getUser(token)
                } catch (error) {
                    userLogout()
                    setError(error.message)
                } finally {
                    setLoading(false)
                }
            }
        }

        autoLogin()
    }, [userLogout])

    async function getUser(token) {
        const {url, options} = USER_GET(token)
        const response = await fetch(url, options)
        const json = await response.json();

        setData(json)
        setLoading(true)

        console.log(json)
    }

    async function userLogin(username, password) {
        try {
            setError(null)
            setLoading(true)
            const {url, options} = TOKEN_POST({ username, password })
            const tokenRes = await fetch(url, options)

            if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`)
            const {token} = await tokenRes.json()
        
            window.localStorage.setItem('token', token)
    
            await getUser(token)

            navigate('/account')
        } catch (error) {
            setError(error.message)
            setLogin(false)
        } finally {
            setLoading(false)
        }

    }

    return (
        <UserContext.Provider
         value={{ userLogin, userLogout, data, error, loading, login }}
        >
            {children}
        </UserContext.Provider>
    )
}