import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    height: 100%;

    /* Gradient hairline border: the wrapper paints the gradient, the card sits
       inset on top of it. Cheaper and crisper than border-image. */
    .card-shell {
        position: relative;
        height: 100%;
        border-radius: 14px;
        padding: 1px;
        background: linear-gradient(150deg, var(--main-color), transparent 42%, transparent 58%, var(--accent-2));
        transition: transform .35s cubic-bezier(.2,.7,.3,1), box-shadow .35s ease;
    }

    .card-shell:hover {
        transform: translateY(-6px);
        box-shadow: var(--glow), var(--glow-2);
    }

    .MuiCard-root {
        background: var(--surface-solid) !important;
        background-image: linear-gradient(180deg, var(--surface), transparent 40%) !important;
        color: var(--color) !important;
        border-radius: 13px !important;
        box-shadow: none !important;
        overflow: hidden;
    }

    .MuiCardHeader-root {
        padding-bottom: 8px;
    }

    & h2 {
        color: var(--color);
        font-family: 'Centra', sans-serif;
        font-weight: 600;
        font-size: 1.18rem;
        letter-spacing: -0.01em;
        text-align: left;
    }

    small {
        font-family: var(--mono);
        color: var(--muted);
        font-size: 0.68rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .thumb {
        display: block;
        position: relative;
        overflow: hidden;
        border-top: 1px solid var(--surface-border);
        border-bottom: 1px solid var(--surface-border);
    }

    .thumb img {
        transition: transform .5s cubic-bezier(.2,.7,.3,1);
    }

    .card-shell:hover .thumb img {
        transform: scale(1.05);
    }

    h5 {
        color: var(--color);
        opacity: 0.85;
        font-family: 'Centra', sans-serif;
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 1.45;
        text-align: left;
    }

    p {
        color: var(--color);
        opacity: 0.85;
        font-family: 'Centra', sans-serif;
        font-size: 0.86rem;
        line-height: 1.5;
        text-align: left;
    }

    .MuiCardActions-root {
        border-top: 1px solid var(--surface-border);
        padding: 6px 8px;
    }

    .platform-icon {
        color: var(--muted);
        margin: 0 6px;
        font-size: 1.05rem;
    }

    .live-link {
        margin-left: 6px;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        min-width: 0;
        font-family: var(--mono);
        font-size: 0.68rem;
        color: var(--accent-2);
        transition: color .2s ease;

        /* Only the domain truncates; the external-link icon must stay visible. */
        .domain {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &:hover {
            color: var(--main-color);
        }
    }

    .expand-btn {
        color: var(--muted);
    }
`
