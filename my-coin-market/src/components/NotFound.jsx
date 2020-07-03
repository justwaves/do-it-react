import React from 'react';
import { Link } from 'react-router-dom';

import Text from 'components/common/Text';
import Spacing from 'components/common/Spacing';

const NotFound = ({ match }) => {
  const { url } = match || {};

  return (
    <>
      <Spacing bottom={2}>
        <Text xlarge>{url} 페이지를 찾을 수 없습니다.</Text>
      </Spacing>
      <Link to="/">메인 페이지로 이동</Link>
    </>
  );
};

export default React.memo(NotFound);
