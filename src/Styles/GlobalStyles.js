import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        :root {
          // Waiting for colors  
        }
        -webkit-tap-highlight-color: transparent;
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
