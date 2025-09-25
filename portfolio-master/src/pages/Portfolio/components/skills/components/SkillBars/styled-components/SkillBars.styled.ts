import styled from "styled-components";

export const SkillBarsGeneralDiv = styled.div `
    list-style: none;
    text-transform: uppercase;
    width: 90%;
    margin: 0px auto;
    color: var(--color);
    padding: 0px;
    @media (max-width:768px) {
	
		width: 100%;
		
	}


     li {
        margin: 5px 0;
        padding: 5px;
    }
    
    h4 {
        text-align: left;
        padding-left: 20px;
    }

    span {
        color: var(--main-color);
        font-size: 2rem;
        
    }

    .bar { 
    background: #353b48;
    display: block;
    height: 20px;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    }
    & span {
        height: 20px;
        float: left;
        background: linear-gradient(135deg, rgba(236,0,140,1) 0%, rgba(252,103,103,1) 100%);

    }
    
    .agile { 
        width: 100%;
        animation: html 3s;
    }
    @keyframes agile {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }
    .scrum { 
        width: 60%;
        animation: html 3s;
    }
    @keyframes scrum {
        0% {
            width: 0%;
        }
        100% {
            width: 60%;
        }
    }

    
    .html { 
        width: 100%;
        animation: html 3s;
    }
    @keyframes html {
        0% {
            width: 0%;
        }
        100% {
            width: 100%;
        }
    }

    .css { 
        width: 80%;
        animation: css 3s;
    }
    @keyframes css {
        0% {
            width: 0%;
        }
        100% {
            width: 80%;
        }
    }

    .js { 
        width: 70%;
        animation: js 3s;
    }
    @keyframes js {
        0% {
            width: 0%;
        }
        100% {
            width: 70%;
        }
    }

    .react { 
        width: 90%;
        animation: react 3s;
    }
    @keyframes react {
        0% {
            width: 0%;
        }
        100% {
            width: 90%;
        }
    }
    .ts { 
        width: 60%;
        animation: ts 3s;
    }
    @keyframes ts {
        0% {
            width: 0%;
        }
        100% {
            width: 60%;
        }
    }

    .poo { 
        width: 90%;
        animation: poo 3s;
    }
    @keyframes poo {
        0% {
            width: 0%;
        }
        100% {
            width: 90%;
        }
    }
    .sql { 
        width: 80%;
        animation: sql 3s;
    }
    @keyframes sql {
        0% {
            width: 0%;
        }
        100% {
            width: 80%;
        }
    }

    .genexus { 
        width: 80%;
        animation: genexus 3s;
    }
    @keyframes genexus {
        0% {
            width: 0%;
        }
        100% {
            width: 80%;
        }
    }

    

    h1 {
        text-align: center;
    }
    h3 {
        margin: 5px;
    }
    }

`;