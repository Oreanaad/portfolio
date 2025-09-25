import React from 'react';
import { AboutMeSocialButtonsDiv } from './styled-components';
export interface AboutMeSocialButtonsProps {}

const AboutMeSocialButtons : React.FC<AboutMeSocialButtonsProps> = () => {
	
	return (
	
	<AboutMeSocialButtonsDiv>
		<ul>
			<li><a href="https://www.linkedin.com/in/oreana-andrade/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>
			<li><a href="https://www.facebook.com/Oreanaad" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
			<li><a href="https://www.instagram.com/oreanaad20/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>
			<li><a href="https://github.com/Oreanaad" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></li>
		</ul>
	</AboutMeSocialButtonsDiv>
	);
};

export default AboutMeSocialButtons;
