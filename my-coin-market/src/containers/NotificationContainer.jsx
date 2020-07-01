import React from 'react';
import { useSelector } from 'react-redux';
import Notification from 'components/Notification';

const NotificationCotainer = () => {
  const { showMessage, message, warning } = useSelector(({ notification }) => ({
    showMessage: notification.showMessage,
    message: notification.message,
    warning: notification.warning,
  }));

  return (
    <Notification
      showMessage={showMessage}
      message={message}
      warning={warning}
    />
  );
};

export default NotificationCotainer;
