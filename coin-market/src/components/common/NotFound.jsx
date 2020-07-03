import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import Text from './Text';
import Spacing from './Spacing';

class NotFound extends PureComponent {
  render() {
    const {
      match: { url },
    } = this.props || {};
    return (
      <>
        <Spacing bottom={2}>
          <Text xlarge>{url} 페이지를 찾을 수 없습니다.</Text>
        </Spacing>
        <Link to="/">메인 페이지로 이동</Link>
      </>
    );
  }
}

export default NotFound;
