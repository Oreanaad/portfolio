import styled from 'styled-components';

export const ExperienceContainer = styled.div`
    width: 100%;
    padding: 0 1rem;

    h4 {
        font-family: var(--mono);
        font-size: 0.72rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--muted);
        padding: 10px 0 14px;
        text-align: left;
        span {
            color: var(--main-color);
        }
    }
`;

export const ExperienceList = styled.ol`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
`;

export const ExperienceItem = styled.li`
    position: relative;
    padding: 1.35rem 1.35rem 1.35rem 1.6rem;
    border: 1px solid var(--surface-border);
    border-radius: 14px;
    background: var(--surface-solid);
    background-image: linear-gradient(180deg, var(--surface), transparent 45%);
    text-align: left;
    overflow: hidden;
    transition: border-color .3s ease, box-shadow .3s ease, transform .3s ease;

    /* Accent rail running down the left edge. */
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 3px;
        background: linear-gradient(180deg, var(--main-color), var(--accent-2));
    }

    &:hover {
        transform: translateY(-3px);
        border-color: transparent;
        box-shadow: var(--glow);
    }

    .role {
        margin: 0;
        font-size: 1.12rem;
        font-weight: 700;
        letter-spacing: -0.01em;
        color: var(--color);
    }

    .company {
        background: linear-gradient(90deg, var(--main-color), var(--accent-2));
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
    }

    .meta {
        margin: 0.3rem 0 0.85rem;
        font-family: var(--mono);
        font-size: 0.72rem;
        letter-spacing: 0.06em;
        color: var(--muted);
    }

    .stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-bottom: 0.9rem;
    }

    .stack span {
        font-family: var(--mono);
        font-size: 0.66rem;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        padding: 0.25rem 0.6rem;
        border-radius: 6px;
        border: 1px solid var(--surface-border);
        background: var(--surface);
        color: var(--color);
        opacity: 0.9;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        li {
            position: relative;
            padding-left: 1.1rem;
            margin-bottom: 0.5rem;
            line-height: 1.55;
            font-size: 0.92rem;
            color: var(--color);
            opacity: 0.86;
        }
        /* Mono arrow instead of a bullet, to match the metadata styling. */
        li::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--accent-2);
        }
    }
`;
