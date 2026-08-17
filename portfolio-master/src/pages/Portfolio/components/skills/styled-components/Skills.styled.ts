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
     p {
        width: 80%;
        margin: auto;
        text-align: center;
        padding-bottom: 1.56rem;
     }
    h4 { 
        
        padding: 10px;
        text-align: left;
        padding-left: 50px;
     }
    span {
        color: var(--main-color);
    }

    /* The navbar wraps taller on small screens, so clear a little more. */
    @media (max-width: 900px) {
        padding-top: 110px;
    }
`