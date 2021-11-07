import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color: white;
        --border-color: rgba(0,0,0,.3);
    }

    body {
        -webkit-font-smoothing: antialiased;
        -webkit-tap-highlight-color: transparent;
        cursor: default;
    }

    body, button {
        font-family: 'Poppins', sans-serif; 
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`;
