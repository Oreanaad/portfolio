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
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BiotechIcon from '@mui/icons-material/Biotech';
import { TimeLineContainer, TimeLineHeader } from './styled-components';
import { useI18n } from '@/i18n';

type DotColor = 'primary' | 'secondary' | 'grey';

/** Presentation per milestone, positional so it stays language-agnostic. */
const STYLES: { icon: JSX.Element; color?: DotColor; outlined?: boolean }[] = [
    { icon: <SchoolIcon />, outlined: true },
    { icon: <CodeIcon />, color: 'primary' },
    { icon: <SportsEsportsIcon />, color: 'secondary' },
    { icon: <PsychologyIcon />, color: 'primary', outlined: true },
    { icon: <SchoolIcon />, color: 'primary' },
    { icon: <BiotechIcon />, color: 'primary', outlined: true },
    { icon: <WorkIcon />, color: 'secondary' },
    { icon: <SchoolIcon />, color: 'primary', outlined: true },
];

export default function CustomizedTimeline() {
    const { t } = useI18n();

    return (
        <TimeLineContainer>
            <TimeLineHeader>
                <h4><span>.</span>{t.skills.labelTimeline}</h4>
            </TimeLineHeader>
            <Timeline position="alternate" sx={{ px: 0 }}>
                {t.timeline.map((item, index) => {
                    const style = STYLES[index] ?? {};
                    return (
                        <TimelineItem key={`${item.year}-${item.title}`}>
                            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="body2">
                                {item.year}
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                {/* No connector above the first dot or below the last one. */}
                                {index > 0 ? <TimelineConnector /> : <span />}
                                <TimelineDot
                                    color={style.color}
                                    variant={style.outlined ? 'outlined' : 'filled'}
                                >
                                    {style.icon}
                                </TimelineDot>
                                {index < t.timeline.length - 1 ? <TimelineConnector /> : <span />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <h3>{item.title}</h3>
                                <p>{item.detail}</p>
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
            </Timeline>
        </TimeLineContainer>
    );
}
