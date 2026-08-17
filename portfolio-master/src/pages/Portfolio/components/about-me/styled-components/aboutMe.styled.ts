import styled from "styled-components";

export const AboutMeSection = styled.div ` 
        height: 100%;
        margin-top: 50px;
        padding: 0px 0 ;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    `;

export const AboutMeCharacterContainer = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top:0;
    /* Decorative backdrop — kept behind the content and out of the way of clicks. */
    z-index: -1;
    pointer-events: none;
`;

export const AboutMeCharacter = styled.div `
    position:relative;
    top:0;
    display: flex;
    & p {
        margin-left: 2px;
        margin-right: 2px;
        position: relative;
        font-size: 15px;
        font-family: 'Times New Roman', Times, serif;
        background: transparent;
        color: #f30889;
        //margin: 0 4px;
        //border-radius: 50%;
        text-shadow: #f578bc 1px 0 10px;
        animation: animate 30s linear infinite;
        animation-duration: calc(125s / var(--i));
        margin-top: calc(125s / var(--i));
        
    }

    & p:nth-child(even) {
        font-family: 'Times New Roman', Times, serif;
        background: transparent;
        color: #f30889;
        //border-radius: 50%;
        text-shadow: #f578bc 1px 0 10px;
    }

    @keyframes animate {
    0% {
        transform: translateY(100vh) scale(1);
    }

    100% {
        transform: translateY(0vh) scale(1);
    }

        }

`;

export const AboutMeSpan = styled.span ` 
    font-weight: 700;
    letter-spacing: 0.8px;
    padding: 8px 10px;
    background: linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
    border: 1px solid rgba(255, 255, 255, 0.5);
    font-size: 20px;
    margin-bottom: 16px;
    display: inline-block;
 `;

export const AboutMeH1 = styled.h1 `
    font-size: clamp(2rem, 5vw, 3.1rem);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.05;
    margin-bottom: 14px;
    display: block;
 `;

export const AboutMeP = styled.p `
    font-size: 1rem;
    letter-spacing: 0.01em;
    line-height: 1.65em;
    max-width: 54ch;
    text-align: center;
    display: block;
    margin: 0 auto 0.9rem;
    color: var(--color);
    opacity: 0.82;
 `;

export const AboutMeButton = styled.button ` 
    padding: 10px;
    background: linear-gradient(90.21deg, rgba(243, 8, 137, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%);
    font-weight: 700;
    color: var(--color);
    font-size: 20px;
    margin-top: 60px;
    margin-left: 20px;
    letter-spacing: 0.8px;
    display: flex;
    align-items: center;
    & svg{
        font-size: 25px;
        margin-left: 10px;
        transition: 0.3s ease-in-out;
        line-height: 1;
    };
 `;

export const AboutMeImg = styled.img ` 
    margin-bottom: 20px;
    width: 80%;
    animation: updown 3s linear infinite;
    @keyframes updown {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-50px);
        }
        100% {
            transform: translateY(0px);
        }
    }
 `;


export const AboutMeSpanTxtRotate = styled.span `
    /* Blinking caret sells the "being typed" effect. */
    border-right: 0.08em solid var(--accent-2);
    padding-right: 2px;
    background: linear-gradient(90deg, var(--main-color), var(--accent-2));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: caret 1s step-end infinite;

    @keyframes caret {
        50% { border-right-color: transparent; }
    }

    @media (prefers-reduced-motion: reduce) {
        animation: none;
    }
 `;
export const AboutMeDivJustifyCenter = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 100px 0;
    gap: 1rem;

    /* Without a flex-basis the intro copy grows wide enough to force a wrap,
       which pushed the illustration onto its own row on desktop. */
    & > div {
        flex: 1 1 420px;
        max-width: 620px;
        min-width: 0;
    }

    /* Reads as the primary call to action, so it gets a real button shape. */
    .resume {
        display: inline-flex;
        align-items: center;
        gap: 2px;
        margin-top: 14px;
        padding: 0.7rem 1.6rem;
        border-radius: 999px;
        border: 1px solid var(--main-color);
        background: var(--surface);
        font-family: var(--mono);
        font-size: 0.95rem;
        color: var(--main-color);
        transition: box-shadow .3s ease, transform .3s ease, background .3s ease;

        & span {
            font-size: 0.95rem;
            font-weight: 500;
            color: var(--color);
        }

        &:hover {
            transform: translateY(-2px);
            box-shadow: var(--glow);
            background: color-mix(in srgb, var(--main-color) 12%, transparent);
        }
    }

        @media (max-width: 768px) {
        
    }

 `;

 export const AboutMeButtonsDiv = styled.div `
    justify-content: center;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap ;
    margin-top: -30px;
`;
