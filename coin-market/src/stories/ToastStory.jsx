import React from 'react';
import { storiesOf } from '@storybook/react';

import Toast from 'components/common/Toast';

storiesOf('Toast', module)
  .addWithJSX('기본 설정', () => <Toast message="Success" />)
  .addWithJSX('Warning', () => <Toast warning message="Error" />);
