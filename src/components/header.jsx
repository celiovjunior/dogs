import { Link } from "react-router-dom";

export function Header() {
    return (
        <nav className="">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
        </nav>
    )
}