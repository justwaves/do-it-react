import React from 'react';
import PropTypes from 'prop-types';
import Toast from 'components/common/Toast';

const Notification = ({ showMessage, message, warning }) => {
  return showMessage && <Toast message={message} warning={warning} />;
};

Notification.propTypes = {
  showMessage: PropTypes.bool,
  warning: PropTypes.bool,
  message: PropTypes.string,
};

export default React.memo(Notification);
