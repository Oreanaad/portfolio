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
	const [expanded, setExpanded] = React.useState(false);
	const detailId = `project-detail-${title.replace(/\s+/g, '-').toLowerCase()}`;

	return (
		<ProjectCardContainer>
			<Card sx={{ height: 400, display: 'flex', flexDirection: 'column' }}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: '#f30889', fontFamily: 'Centra' }} aria-hidden="true">
							{logo}
						</Avatar>
					}
					title={<h2>{title}</h2>}
					subheader={<small>{category} · {sector}</small>}
					sx={{
						fontFamily: 'Centra',
						bgcolor: 'var(--bg)',
						borderStyle: 'solid solid hidden solid',
						borderColor: '#f30889',
						borderWidth: '1px',
						borderRadius: '5px 5px 0px 0px',
					}}
				/>

				{/* The whole thumbnail is a link to the live site. */}
				<a href={href} target="_blank" rel="noreferrer" aria-label={`Open ${title} in a new tab`}>
					<CardMedia
						component="img"
						image={img}
						alt={alt}
						loading="lazy"
						sx={{
							height: 200,
							objectFit: 'cover',
							objectPosition: 'top',
							backgroundColor: '#f4f4f4',
							borderStyle: 'hidden solid',
							borderColor: '#f30889',
							borderWidth: '1px',
						}}
					/>
				</a>

				<CardContent
					sx={{
						flexGrow: 1,
						borderStyle: 'hidden solid',
						borderColor: '#f30889',
						borderWidth: '1px',
					}}
				>
					<h5>{short}</h5>
				</CardContent>

				<CardActions
					disableSpacing
					sx={{
						borderStyle: 'hidden solid solid solid',
						borderColor: '#f30889',
						borderWidth: '1px',
						borderRadius: '0px 0px 5px 5px',
					}}
				>
					{/* Availability indicators, not controls — static icons, not disabled buttons. */}
					{web && (
						<Tooltip title="Available on web">
							<ComputerIcon aria-label="Available on web" sx={{ mx: 0.75, opacity: 0.6 }} />
						</Tooltip>
					)}
					{mobile && (
						<Tooltip title="Available on mobile">
							<MobileFriendlyIcon aria-label="Available on mobile" sx={{ mx: 0.75, opacity: 0.6 }} />
						</Tooltip>
					)}

					<a className="live-link" href={href} target="_blank" rel="noreferrer">
						<span className="domain">{domain}</span>
						<OpenInNewIcon sx={{ fontSize: 14, flexShrink: 0 }} aria-hidden="true" />
					</a>

					<ExpandMore
						expand={expanded}
						onClick={() => setExpanded(!expanded)}
						aria-expanded={expanded}
						aria-controls={detailId}
						aria-label={expanded ? `Hide details about ${title}` : `Show details about ${title}`}
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
		</ProjectCardContainer>
	);
}

export default ProjectCard;
