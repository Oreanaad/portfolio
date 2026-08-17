import styled from 'styled-components';

export const ExperienceContainer = styled.div`
    width: 100%;
    padding: 0 1rem;

    h4 {
        padding: 10px 0;
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
    gap: 1.5rem;
`;

export const ExperienceItem = styled.li`
    position: relative;
    padding: 1.25rem 1.25rem 1.25rem 1.5rem;
    border: 1px solid var(--main-color);
    border-radius: 12px;
    background-color: var(--bg);
    text-align: left;

    /* Accent bar echoes the pink used across the cards and the timeline. */
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 12px;
        bottom: 12px;
        width: 4px;
        border-radius: 0 4px 4px 0;
        background-color: var(--main-color);
    }

    .role {
        margin: 0;
        font-size: 1.15rem;
        font-weight: 700;
        color: var(--color);
    }

    .company {
        color: var(--main-color);
        font-weight: 600;
    }

    .meta {
        margin: 0.15rem 0 0.75rem;
        font-size: 0.85rem;
        opacity: 0.85;
    }

    .stack {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-bottom: 0.75rem;
    }

    .stack span {
        font-size: 0.72rem;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        padding: 0.2rem 0.55rem;
        border-radius: 999px;
        border: 1px solid var(--main-color);
        color: var(--color);
    }

    ul {
        margin: 0;
        padding-left: 1.1rem;
        li {
            margin-bottom: 0.4rem;
            line-height: 1.45;
            font-size: 0.93rem;
        }
    }
`;
