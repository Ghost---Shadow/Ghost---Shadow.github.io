import React from 'react';

import Landing from './index';

export default {
  title: 'Landing',
  component: Landing,
};

export const normal = () => (
  <Landing />
);

normal.story = { name: 'normal' };
