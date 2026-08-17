import React from 'react';
import { Linkedin, Facebook, Instagram, Github } from 'react-bootstrap-icons';
import { AboutMeSocialButtonsDiv } from './styled-components';

const SOCIALS = [
	{
		href: 'https://www.linkedin.com/in/oreana-andrade-6176382aa',
		label: 'LinkedIn profile',
		Icon: Linkedin,
	},
	{ href: 'https://www.facebook.com/Oreanaad', label: 'Facebook profile', Icon: Facebook },
	{ href: 'https://www.instagram.com/oreanaad20/', label: 'Instagram profile', Icon: Instagram },
	{ href: 'https://github.com/Oreanaad', label: 'GitHub profile', Icon: Github },
];

const AboutMeSocialButtons: React.FC = () => (
	<AboutMeSocialButtonsDiv>
		<ul>
			{SOCIALS.map(({ href, label, Icon }) => (
				<li key={href}>
					<a href={href} target="_blank" rel="noreferrer" aria-label={label}>
						<Icon size={30} aria-hidden="true" />
					</a>
				</li>
			))}
		</ul>
	</AboutMeSocialButtonsDiv>
);

export default AboutMeSocialButtons;
