import React from 'react';
import { VERY_LIGHT_GREY } from '../../colors';

import Header from './header';

export default {
  title: 'Common/Header',
  component: Header,
};

export const normal = () => (
  <div style={{
    width: '100vw',
    height: '50vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: VERY_LIGHT_GREY,
  }}
  >
    <Header />
  </div>
);

normal.story = { name: 'normal' };
