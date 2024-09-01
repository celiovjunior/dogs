import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        --type-first: Helvetica, Arial, sans-serif;
        --type-second: 'Spectral', georgia;

        margin: 0px;
        padding-top: 4rem;
        color: #333;
        font-family: var(--type-first);
    }

    h1, h2, h3, h4, h5, h6, p {
        margin: 0px;
    }

    ul, li {
        list-style: none;
        padding: 0px;
        margin: 0px;
    }

    img {
        display: block;
        max-width: 100%;
    }

    button {
        display: block;
        font-size: 1rem;
        font-family: var(--type-first);
        color: #333;
    }

    a {
        text-decoration: none;
    }

    .container {
        max-width: 50rem;
        padding: 0 1rem;
        margin: 0 auto;
    }

    .title {
        font-family: var(--type-second);
        line-height: 1;
        font-size: 3rem;
        margin: 1rem 0;
        position: relative;
    }

    .animeLeft {
        opacity: 0;
        transform: translateX(-20px);
        animation: animeLeft .3s forwards;
    }

    @keyframes animeLeft {
        to {
            opacity: 1;
            transform: inherit;
        }
    }
`
