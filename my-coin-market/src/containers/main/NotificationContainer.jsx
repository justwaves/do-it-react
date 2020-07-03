import React from 'react';
import { useSelector } from 'react-redux';
import Notification from 'components/main/Notification';

const NotificationContainer = () => {
  const { hasError, errorMessage } = useSelector(({ transactions }) => ({
    hasError: transactions.hasError,
    errorMessage: transactions.errorMessage,
  }));

  return <Notification hasError={hasError} errorMessage={errorMessage} />;
};

export default NotificationContainer;
