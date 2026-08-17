import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import React from 'react';
import ComputerIcon from '@mui/icons-material/Computer';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { styled } from '@mui/material/styles';
import { ProjectCardContainer } from './styled-components';
import { useI18n } from '@/i18n';

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean;
}

const ExpandMore = styled(({ expand: _expand, ...other }: ExpandMoreProps) => (
	<IconButton {...other} />
))(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}));

interface Props {
	logo: string;
	title: string;
	category: string;
	sector: string;
	short: string;
	img: string;
	alt: string;
	detail: string;
	href: string;
	domain: string;
	web: boolean;
	mobile: boolean;
}

function ProjectCard({
	logo, title, category, sector, short, img, alt, detail, href, domain, web, mobile,
}: Props): JSX.Element {
	const { t } = useI18n();
	const [expanded, setExpanded] = React.useState(false);
	const detailId = `project-detail-${title.replace(/\s+/g, '-').toLowerCase()}`;

	return (
		<ProjectCardContainer>
			<div className="card-shell">
				<Card sx={{ height: 368, display: 'flex', flexDirection: 'column' }}>
					<CardHeader
						avatar={
							<Avatar
								aria-hidden="true"
								sx={{
									width: 38,
									height: 38,
									fontSize: '0.85rem',
									fontFamily: 'var(--mono)',
									fontWeight: 700,
									color: '#fff',
									background: 'linear-gradient(135deg, var(--main-color), var(--accent-2))',
								}}
							>
								{logo}
							</Avatar>
						}
						title={<h2>{title}</h2>}
						subheader={<small>{category} / {sector}</small>}
						sx={{ bgcolor: 'transparent' }}
					/>

					{/* The whole thumbnail is a link to the live site. */}
					<a
						className="thumb"
						href={href}
						target="_blank"
						rel="noreferrer"
						aria-label={t.a11y.openIn(title)}
					>
						<CardMedia
							component="img"
							image={img}
							alt={alt}
							loading="lazy"
							sx={{ height: 185, objectFit: 'cover', objectPosition: 'top' }}
						/>
					</a>

					<CardContent sx={{ flexGrow: 1, py: 1.5 }}>
						<h5>{short}</h5>
					</CardContent>

					<CardActions disableSpacing>
						{/* Availability indicators, not controls — static icons, not buttons. */}
						{web && (
							<Tooltip title={t.a11y.onWeb}>
								<ComputerIcon className="platform-icon" aria-label={t.a11y.onWeb} />
							</Tooltip>
						)}
						{mobile && (
							<Tooltip title={t.a11y.onMobile}>
								<MobileFriendlyIcon className="platform-icon" aria-label={t.a11y.onMobile} />
							</Tooltip>
						)}

						<a className="live-link" href={href} target="_blank" rel="noreferrer">
							<span className="domain">{domain}</span>
							<OpenInNewIcon sx={{ fontSize: 13, flexShrink: 0 }} aria-hidden="true" />
						</a>

						<ExpandMore
							className="expand-btn"
							expand={expanded}
							onClick={() => setExpanded(!expanded)}
							aria-expanded={expanded}
							aria-controls={detailId}
							aria-label={expanded ? t.a11y.hideDetails(title) : t.a11y.showDetails(title)}
						>
							<ExpandMoreIcon />
						</ExpandMore>
					</CardActions>

					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent id={detailId}>
							<p>{detail}</p>
						</CardContent>
					</Collapse>
				</Card>
			</div>
		</ProjectCardContainer>
	);
}

export default ProjectCard;
