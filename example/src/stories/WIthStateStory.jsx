import React from 'react';
import { storiesOf } from '@storybook/react';

import { CounterWithCountState } from '../hoc/withState';

storiesOf('WithState', module).addWithJSX('CounterWithCountState', () => (
  <CounterWithCountState />
));
