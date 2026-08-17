import styled from "styled-components";



export const SkillsSection = styled.section`
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    
    
`
export const SkillsHeader = styled.div`
     /* Padding, not margin: a top margin here collapses out to the page
        container, so the heading could slide under the fixed navbar. */
     padding-top: 90px;

     h1 {
        font-size: clamp(2rem, 5vw, 3rem);
        letter-spacing: -0.02em;
     }

     p {
        width: min(80%, 62ch);
        margin: auto;
        text-align: center;
        color: var(--color);
        opacity: 0.82;
        padding-bottom: 1.2rem;
     }
    h4 {
        padding: 10px;
        text-align: left;
        padding-left: 50px;
     }
    span {
        background: linear-gradient(90deg, var(--main-color), var(--accent-2));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* The navbar wraps taller on small screens, so clear a little more. */
    @media (max-width: 900px) {
        padding-top: 110px;
    }
`