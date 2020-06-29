import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';
import Text from '../components/Text';
import withHoC from '../hoc/withHoC';

const ButotnWithHoC = withHoC(Button);
const TextWithHoC = withHoC(Text);

storiesOf('WithHoC', module)
  .addWithJSX('기본 설정', () => (
    <div>
      <ButotnWithHoC>안녕하세요</ButotnWithHoC>
      <TextWithHoC>안녕하세요</TextWithHoC>
    </div>
  ))
  .addWithJSX('large 예제', () => (
    <div>
      <ButotnWithHoC large>안녕하세요</ButotnWithHoC>
      <TextWithHoC large>안녕하세요</TextWithHoC>
    </div>
  ));
