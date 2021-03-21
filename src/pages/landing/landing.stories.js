import React from 'react';

import Landing from './index';

export default {
  title: 'Landing',
  component: Landing,
};

export const normal = () => (
  <div style={{ width: '1920px', height: '1080px', display: 'flex' }}>
    <Landing />
  </div>
);

normal.story = { name: 'normal' };
