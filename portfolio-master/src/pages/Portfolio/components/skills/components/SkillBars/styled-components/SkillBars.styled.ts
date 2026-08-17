import styled from "styled-components";

export const SkillBarsGeneralDiv = styled.div`
    list-style: none;
    text-transform: uppercase;
    width: 90%;
    margin: 0px auto;
    color: var(--color);
    padding: 0px;
    @media (max-width:768px) {
        width: 100%;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 5px 0;
        padding: 5px;
    }

    h4 {
        text-align: left;
        padding-left: 20px;
        span {
            color: var(--main-color);
            font-size: 2rem;
        }
    }

    h3 {
        margin: 5px;
        text-align: left;
        font-size: 0.85rem;
        letter-spacing: 0.03em;
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
    }

    /* One rule drives every bar; --level is set per skill from the component. */
    .fill {
        display: block;
        height: 100%;
        width: var(--level);
        background: linear-gradient(135deg, rgba(236,0,140,1) 0%, rgba(252,103,103,1) 100%);
        animation: grow 1.5s ease-out;
    }

    @keyframes grow {
        from { width: 0%; }
        to { width: var(--level); }
    }

    /* Respect users who ask the OS to reduce motion. */
    @media (prefers-reduced-motion: reduce) {
        .fill {
            animation: none;
        }
    }
`;
