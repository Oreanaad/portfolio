import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WorkIcon from '@mui/icons-material/Work';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import BiotechIcon from '@mui/icons-material/Biotech';
import { TimeLineContainer, TimeLineHeader } from './styled-components';

type DotColor = 'primary' | 'secondary' | 'grey';

interface Milestone {
    year: string;
    title: string;
    detail: string;
    icon: JSX.Element;
    color?: DotColor;
    outlined?: boolean;
}

const MILESTONES: Milestone[] = [
    {
        year: '2020',
        title: 'Systems Engineering',
        detail: 'Started at Universidad Bicentenaria de Aragua',
        icon: <SchoolIcon />,
        outlined: true,
    },
    {
        year: '2023',
        title: 'Web Development diploma',
        detail: 'JavaScript, HTML, CSS and Node.js',
        icon: <CodeIcon />,
        color: 'primary',
    },
    {
        year: '2023',
        title: 'Team Lead & Meeting Conductor',
        detail: 'Lotus Interworks — Simplia, remote',
        icon: <Diversity3Icon />,
        color: 'secondary',
    },
    {
        year: '2024',
        title: 'Neural Networks with Python',
        detail: 'Universidad Central de Venezuela',
        icon: <PsychologyIcon />,
        color: 'primary',
        outlined: true,
    },
    {
        year: '2024',
        title: 'Systems Engineer',
        detail: 'Graduated from Universidad Bicentenaria de Aragua',
        icon: <SchoolIcon />,
        color: 'primary',
    },
    {
        year: '2025',
        title: 'Biomedical Engineering diploma',
        detail: 'Universidad Simón Bolívar',
        icon: <BiotechIcon />,
        color: 'primary',
        outlined: true,
    },
    {
        year: '2025',
        title: 'Full Stack Developer',
        detail: 'EME Solutions, remote — Genexus, React, Node.js',
        icon: <WorkIcon />,
        color: 'secondary',
    },
];

export default function CustomizedTimeline() {
    return (
        <TimeLineContainer>
            <TimeLineHeader>
                <h4><span>.</span>TIMELINE</h4>
            </TimeLineHeader>
            <Timeline position="alternate" sx={{ px: 0 }}>
                {MILESTONES.map((item, index) => (
                    <TimelineItem key={`${item.year}-${item.title}`}>
                        <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
                            {item.year}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            {/* No connector above the first dot or below the last one. */}
                            {index > 0 ? <TimelineConnector /> : <span />}
                            <TimelineDot
                                color={item.color}
                                variant={item.outlined ? 'outlined' : 'filled'}
                            >
                                {item.icon}
                            </TimelineDot>
                            {index < MILESTONES.length - 1 ? <TimelineConnector /> : <span />}
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <h3>{item.title}</h3>
                            <p>{item.detail}</p>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </TimeLineContainer>
    );
}
