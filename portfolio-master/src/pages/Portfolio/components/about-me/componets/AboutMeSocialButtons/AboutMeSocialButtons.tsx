import React from 'react';
import { Linkedin, Instagram, Github } from 'react-bootstrap-icons';
import { AboutMeSocialButtonsDiv } from './styled-components';
import { useI18n } from '@/i18n';

// Brand colour travels with each entry. It used to live in :nth-child rules,
// which silently mismatched as soon as a link was added or removed.
const SOCIALS = [
	{
		href: 'https://www.linkedin.com/in/oreana-andrade-6176382aa',
		labelKey: 'linkedin' as const,
		hover: '#0d559e',
		Icon: Linkedin,
	},
	{
		href: 'https://www.instagram.com/thundskills/',
		labelKey: 'instagram' as const,
		hover: '#E4405F',
		Icon: Instagram,
	},
	{
		href: 'https://github.com/Oreanaad',
		labelKey: 'github' as const,
		hover: '#6cc644',
		Icon: Github,
	},
];

const AboutMeSocialButtons: React.FC = () => {
	const { t } = useI18n();
	return (
	<AboutMeSocialButtonsDiv>
		<ul>
			{SOCIALS.map(({ href, labelKey, hover, Icon }) => (
				<li key={href}>
					<a
						href={href}
						target="_blank"
						rel="noreferrer"
						aria-label={t.a11y[labelKey]}
						style={{ ['--hover-bg' as string]: hover }}
					>
						<Icon size={30} aria-hidden="true" />
					</a>
				</li>
			))}
		</ul>
	</AboutMeSocialButtonsDiv>
	);
};

export default AboutMeSocialButtons;
