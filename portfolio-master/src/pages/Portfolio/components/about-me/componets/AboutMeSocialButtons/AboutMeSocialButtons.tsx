import React from 'react';
import { Linkedin, Instagram, Github } from 'react-bootstrap-icons';
import { AboutMeSocialButtonsDiv } from './styled-components';

// Brand colour travels with each entry. It used to live in :nth-child rules,
// which silently mismatched as soon as a link was added or removed.
const SOCIALS = [
	{
		href: 'https://www.linkedin.com/in/oreana-andrade-6176382aa',
		label: 'LinkedIn profile',
		hover: '#0d559e',
		Icon: Linkedin,
	},
	{
		href: 'https://www.instagram.com/oreanaad20/',
		label: 'Instagram profile',
		hover: '#E4405F',
		Icon: Instagram,
	},
	{
		href: 'https://github.com/Oreanaad',
		label: 'GitHub profile',
		hover: '#6cc644',
		Icon: Github,
	},
];

const AboutMeSocialButtons: React.FC = () => (
	<AboutMeSocialButtonsDiv>
		<ul>
			{SOCIALS.map(({ href, label, hover, Icon }) => (
				<li key={href}>
					<a
						href={href}
						target="_blank"
						rel="noreferrer"
						aria-label={label}
						style={{ ['--hover-bg' as string]: hover }}
					>
						<Icon size={30} aria-hidden="true" />
					</a>
				</li>
			))}
		</ul>
	</AboutMeSocialButtonsDiv>
);

export default AboutMeSocialButtons;
