import React from 'react';

import About from './index';

export default {
  title: 'About',
  component: About,
};

export const normal = () => (
  <About />
);

normal.story = { name: 'normal' };
