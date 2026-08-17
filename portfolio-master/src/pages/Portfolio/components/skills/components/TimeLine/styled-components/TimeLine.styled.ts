import styled from "styled-components";

export const TimeLineContainer = styled.div`
     margin-top: 0px;
     margin-bottom: 3rem;
     padding: 0 0.5rem;

     /* These were <h1> per entry, which broke the page heading hierarchy. */
     h3 {
        margin: 0;
        padding: 4px 8px 2px;
        font-size: 0.95rem;
        font-weight: 600;
        text-align: center;
        font-family: "Centra";
        color: var(--color);
     }

     p {
        margin: 0;
        padding: 0 8px;
        text-align: center;
        font-size: 0.78rem;
        font-family: "Centra";
        color: var(--muted);
     }

     /* Year column reads as data, so it gets the mono treatment. */
     .MuiTimelineOppositeContent-root {
        font-family: var(--mono) !important;
        font-size: 0.7rem !important;
        letter-spacing: 0.08em;
        color: var(--muted);
     }

     .MuiTimelineConnector-root {
        background-color: var(--surface-border);
     }

     .MuiTimelineDot-root {
        border-color: var(--main-color);
        box-shadow: 0 0 14px rgba(243, 8, 137, 0.35);
     }

     .MuiTimelineDot-filled {
        background: linear-gradient(135deg, var(--main-color), var(--accent-2));
     }

     .MuiTimelineDot-outlined {
        background: var(--surface-solid);
        color: var(--accent-2);
     }

     .MuiTimelineDot-root svg {
        font-size: 1.1rem;
     }
`

export const TimeLineHeader = styled.div`
    h4 {
        font-family: var(--mono);
        font-size: 0.72rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--muted);
        text-align: left;
        padding: 10px 0 6px 8px;
     }
    span {
        color: var(--main-color);
    }
`
