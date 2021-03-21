import React from 'react';
// import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import PortfolioCard from './portfolio-card';

import Art1 from '../../assets/art1.png';
import { VERY_LIGHT_GREY } from '../../colors';

export default {
  title: 'Portfolio/Card',
  component: PortfolioCard,
  decorators: [withKnobs],
};

const bodyText = `
poo poo poo poo poo poo poo poo poo poo poo poo
poo poo poo poo poo poo poo poo poo poo poo poo
poo poo poo poo poo poo poo poo poo poo poo poo
poo poo poo poo poo poo poo poo poo poo

poo poo poo poo poo poo poo poo poo poo poo poo
poo poo poo poo poo poo poo poo poo poo poo poo
poo poo poo poo poo poo poo poo poo poo poo poo
poo poo poo poo poo poo poo poo poo poo
`;

export const normal = () => (
  <div style={{
    display: 'flex',
    height: '80vh',
    width: '80vw',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: VERY_LIGHT_GREY,
  }}
  >
    <PortfolioCard
      title={text('title', 'Project Title')}
      imgSrc={Art1}
      projectUrl={text('projectUrl', 'https://www.google.com')}
      bodyText={bodyText}
    />
  </div>
);

normal.story = { name: 'normal' };
