import React from 'react';
import branch from 'recompose/branch';
import Button from './button/Button';

export default branch(
  ({ isLoading }) => isLoading,
  () => () => <Button disabled>로딩 중</Button>,
)(Button);
