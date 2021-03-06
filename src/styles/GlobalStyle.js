import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --purple-primary: #554DDE;
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavender-secondary: #6A6D9E; /*Primary Font Color*/
        --dark-primary: #16194F;
        --border-colour: #CAD6F1;
        
    }
    *{
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        text-decoration: none;
    } 
    body{
        background-color: var(--neutral-light);
        color: white;
        font-size: 1.2rem;
    }

    a{
        color: inherit;
    } 
    p{
        color: var(--lavender-secondary);
        line-height: 1.9rem;
    }
    .secondary-heading{
        font-size: 3rem;
        color: var(--purple-primary);
        
    }
    .small-heading{
        font-size: 2.5rem;
        color: var(--purple-primary);
        text-align: center;
    }
    .pink{
        color: var(--accent-pink);
    }
    .currentItem{
        background-color: rgba(0, 0, 0, 0.1);
        .listItemIcon{
            .white{
                color:#bea1f8;
            }
        }
    }

    .alignRight{
        margin-left:auto;
        display: flex;
        justify-content: space-between;
    }
    .MuiChip-icon{
        color:white!important;
    }
    .dashboardTitle{
        color: var(--lavender-secondary);
    }
    .listItem{
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding:8px;
    }
    .listItemIcon{
        min-width: 0px!important;
    }
    .listItemText span{
        color:white;
        font-size:12px;
    }
    .listItemTextActive span{
        color:#bea1f8;
        font-size:14px;
    }
    .white{
        color:white;
    }
`;

export default GlobalStyle;
