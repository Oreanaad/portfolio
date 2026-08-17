import styled from "styled-components";

export const PortfolioWrapperNav = styled.nav`
    display: flex;
    align-items: center;
    padding: .4rem;
    justify-content: space-between;
    box-shadow: var(--navbarShadow);
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    /* Frosted bar so content scrolls under it instead of vanishing behind a slab. */
    background-color: color-mix(in srgb, var(--bg) 72%, transparent);
    backdrop-filter: saturate(160%) blur(14px);
    -webkit-backdrop-filter: saturate(160%) blur(14px);
    border-bottom: 1px solid var(--surface-border);

    /* Browsers without color-mix keep a solid bar rather than a see-through one. */
    @supports not (background-color: color-mix(in srgb, red 50%, transparent)) {
        background-color: var(--bg);
    }

    h2 {
        font-family: var(--mono);
        font-weight: 700;
        letter-spacing: -0.02em;
        span {
            font-weight: 200;
            background: linear-gradient(90deg, #f30889, var(--accent-2));
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    a {
            text-decoration: none;
            margin-right: 1rem;
            
    }
    
    .links {
         
        position: absolute;
        top: -700px;
        left: -1000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .5s ease;
        cursor: pointer;
        a {
            display: block;
            font-size: 2rem;
            //border-bottom: solid 2px transparent;
            &:hover {
                color: var(--main-color);
            }
        }
        @media (min-width: 768px) {
            position: initial;
            margin: 0;
            a {
                font-size: 1rem;
                display: inline;
            }

        }
        
    }
    
    .links.active {
        width: 100%;
        display: block;
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        top: 100px;
        left: 0;
        right: 0;
        text-align: center;
        
        a{
            font-size: 2rem;
            margin-top: 1rem;
        }
    }

    .burguer {
        
        @media (min-width: 768px) {
            display: none;
         }
    }
    .switch {
        background-color: var(--bg);
        color: var(--color);
        cursor: pointer;
        &:hover {
            color: var(--main-color);
            
        }
        @media (max-width: 768px) {
            position: relative;
            display: inline-block;
            background-color: transparent;
            margin-left: 50%;
            vertical-align: 0mm;
    }
    }

    
    

 `;

export const PortfolioWrapperLogo = styled.div ` 
    
`;

export const BgDiv = styled.div `
position: absolute;
background-color: #444;
top: -100px;
left: -1000px;
right: 0;
width: 100%;
height: 100%;
z-index: 4;
transition: all .6s ease;
@media (min-width: 768px) {
            display: none;
    }
&.active {
    border-radius: 0 0 60% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    
}
`;
