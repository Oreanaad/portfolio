import styled from 'styled-components';

export const AboutMeSocialButtonsDiv = styled.div`
    & ul {
        padding: 0;
        margin: 0;
        margin-left: 10px;
        margin-top: 60px;
        display: flex;

        & li {
            list-style: none;
            margin: 0 10px;

            & svg {
                transition: .6s;
                color: inherit;
            }

            & a {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: var(--bg);
                color: var(--color);
                text-align: center;
                transition: .6s;
                box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
            }

            /* --hover-bg is set per link in the component, so the brand colour
               follows the link rather than its position in the list. */
            & a:hover {
                color: var(--bg);
                background-color: var(--hover-bg);
                transform: translate(0, -10px);
            }
        }
    }
`
