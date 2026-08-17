import styled from "styled-components";



export const TimeLineContainer = styled.div`
     margin-top: 0px;
     margin-bottom: 3rem;
     /* These were <h1> per entry, which broke the page heading hierarchy. */
     h3 {
        margin: 0;
        padding: 8px;
        font-size: 1.1rem;
        text-align: center;
        font-family: "Centra";
     }

     p {
        margin: 0;
        text-align: center;
        font-size: 0.8rem;
        font-family: "Centra";
     }

     div {
        font-family: "Centra";
     }

    
`

export const TimeLineHeader = styled.div`

    h4 { 
        
        text-align: left;
        padding-left: 20px;
     }
    span {
        font-size: 2rem;
        color: var(--main-color);
    }
`