import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
        list-style: none;
    }
    :root{
        --color-primary: #222260;
        --color-primary-variant: #222260;
        --color-secondary: #999999;
        --color-white: #fff;
        --color-black: #000000;
        --color-grey-0: #f8f8f8;
    }
    body{
        font-family: 'Nunito', sans-serif;
        font-size: 1rem;
      overflow: hidden;
      color: rgba(34,37,96,.6);
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    .container{
        display: grid;
        place-items: center;
        height: 100vh;
    }
    .inner-container{
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
    .header-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
    }
   `