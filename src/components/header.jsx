import { Link } from "react-router-dom";
import dogsLogo from "../assets/dogs.svg"
import userSvg from "../assets/usuario.svg"
import styled from "styled-components";

const HeaderTag = styled.header`
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0.5em;
    position: fixed;
    width: 100%;
    z-index: 100;
    background: white;
    top: 0px;
`

const NavTag = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled(Link)`
    color: #333;
    text-decoration: none;

    display: flex;
    align-items: center;

    img {
        margin-left: 0.5rem;
    }
`

const ImgTag = styled.img`
    padding: 0.5rem 0px;
`

export function Header() {
    return (
        <HeaderTag>
            <NavTag className="container">
                <Link to="/" aria-label="Dogs - Home">
                    <ImgTag src={dogsLogo} alt="SVG Logo Image" />
                </Link>
                <StyledLink to="/login">Login / Sign Up <img src={userSvg} alt="User link" /></StyledLink>
            </NavTag>
        </HeaderTag>
    )
}