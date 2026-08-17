import styled from "styled-components";

export const ProjectCardContainer = styled.div`
    background-color: var(--bg);

    & h2 {
        color: var(--color);
        font-family: 'Centra', sans-serif;
        font-weight: 200;
        font-size: 1.25rem;
        text-align: left;
    }

    small {
        color: var(--color);
        font-family: 'Centra', sans-serif;
        opacity: 0.75;
        font-size: 0.75rem;
    }

    /* No colour override here: these sit on MUI's white Card surface, not on
       var(--bg), so they must keep MUI's dark-on-paper text colour. Setting
       var(--color) would render them white-on-white in the dark theme. */
    h5 {
        font-family: 'Centra', sans-serif;
        font-weight: 400;
        font-size: 0.92rem;
        line-height: 1.4;
        text-align: left;
    }

    p {
        font-family: 'Centra', sans-serif;
        font-size: 0.88rem;
        line-height: 1.45;
        text-align: left;
    }

    .live-link {
        margin-left: 0.4rem;
        display: inline-flex;
        align-items: center;
        gap: 3px;
        min-width: 0;
        font-size: 0.72rem;
        color: var(--main-color);

        /* Only the domain text truncates; the external-link icon must not be
           clipped along with it, so it stays outside the overflow context. */
        .domain {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        &:hover {
            text-decoration: underline;
        }
    }
`
