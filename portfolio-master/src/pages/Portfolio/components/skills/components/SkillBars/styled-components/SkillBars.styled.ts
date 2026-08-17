import styled from "styled-components";

export const SkillBarsGeneralDiv = styled.div`
    width: 100%;
    margin: 0px auto;
    color: var(--color);
    padding: 0 1rem;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0 0 0.85rem;
    }

    h4 {
        font-family: var(--mono);
        font-size: 0.72rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--muted);
        text-align: left;
        padding: 10px 0 14px;
        span {
            color: var(--main-color);
        }
    }

    .skill-row {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        margin-bottom: 6px;
    }

    h3 {
        margin: 0;
        text-align: left;
        font-size: 0.82rem;
        font-weight: 500;
        letter-spacing: 0.02em;
        color: var(--color);
        opacity: 0.9;
    }

    .level {
        font-family: var(--mono);
        font-size: 0.68rem;
        color: var(--muted);
    }

    .bar {
        display: block;
        height: 6px;
        border-radius: 999px;
        background: var(--surface);
        border: 1px solid var(--surface-border);
        overflow: hidden;
    }

    /* One rule drives every bar; --level is set per skill from the component. */
    .fill {
        display: block;
        height: 100%;
        width: var(--level);
        border-radius: 999px;
        background: linear-gradient(90deg, var(--main-color), var(--accent-2));
        box-shadow: 0 0 12px rgba(243, 8, 137, 0.45);
        animation: grow 1.4s cubic-bezier(.2,.7,.3,1);
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
