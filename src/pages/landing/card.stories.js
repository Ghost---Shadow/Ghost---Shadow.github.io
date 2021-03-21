import React from 'react';
import { VERY_LIGHT_GREY } from '../../colors';

import Card from './card';

export default {
  title: 'Landing/Card',
  component: Card,
};

export const normal = () => (
  <div style={{ width: '100vw', height: '100vh', backgroundColor: VERY_LIGHT_GREY }}>
    <Card />
  </div>
);

normal.story = { name: 'normal' };
