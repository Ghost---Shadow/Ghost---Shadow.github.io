import React from 'react';

import Portfolio from './index';

export default {
  title: 'Portfolio',
  component: Portfolio,
};

export const normal = () => (
  <Portfolio />
);

normal.story = { name: 'normal' };
