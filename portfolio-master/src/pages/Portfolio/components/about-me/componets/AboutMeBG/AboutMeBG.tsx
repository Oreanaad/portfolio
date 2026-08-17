import React from 'react';
import { AboutMeCharacter, AboutMeCharacterContainer } from '../../styled-components/aboutMe.styled';

const COLUMNS = 20;
const ROWS = 11;
/** The stylesheet animates each digit with a delay derived from --i. */
const DELAY_MIN = 10;
const DELAY_MAX = 26;

// Deterministic so the backdrop is identical on every render and every visit —
// this used to be 300+ lines of hand-typed 0s and 1s.
const pseudoRandom = (seed: number) => {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const CHARACTERS = Array.from({ length: COLUMNS * ROWS }, (_, i) => ({
  digit: pseudoRandom(i + 1) > 0.5 ? '1' : '0',
  delay: DELAY_MIN + Math.floor(pseudoRandom(i + 101) * (DELAY_MAX - DELAY_MIN + 1)),
}));

const AboutMeBG: React.FC = () => (
  <AboutMeCharacterContainer aria-hidden="true">
    <AboutMeCharacter>
      {CHARACTERS.map(({ digit, delay }, i) => (
        <p key={i} style={{ ['--i' as string]: String(delay) } as React.CSSProperties}>
          {digit}
        </p>
      ))}
    </AboutMeCharacter>
  </AboutMeCharacterContainer>
);

export default AboutMeBG;
