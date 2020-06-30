import React from 'react';
import { storiesOf } from '@storybook/react';

import HomePageComponent from '../pages/HomePageComponent';
import HomePageWithProvider from '../pages/HomePageWithProvider';

storiesOf('HomePageComponent', module)
  .addWithJSX('컨텍스트 예제', () => <HomePageComponent />)
  .addWithJSX('Provider 예제', () => <HomePageWithProvider />);
