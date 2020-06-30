import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineList from 'components/common/InlineList';
import { css } from 'styles/withStyles';

function RedBox({ children }) {
  return (
    <div
      {...css({
        backgroundColor: 'red',
        padding: 30,
        height: Math.random() * 100,
      })}
    >
      {children}
    </div>
  );
}

storiesOf('InlineList', module)
  .addWithJSX('기본 설정', () => (
    <InlineList>
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .addWithJSX('align=center', () => (
    <InlineList align="center">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .addWithJSX('align=right', () => (
    <InlineList align="right">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .addWithJSX('align=top', () => (
    <InlineList align="top">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ))
  .addWithJSX('align=bottom', () => (
    <InlineList align="bottom">
      <RedBox>1</RedBox>
      <RedBox>2</RedBox>
      <RedBox>3</RedBox>
    </InlineList>
  ));
