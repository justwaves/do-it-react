import React from 'react';
import PropTypes from 'prop-types';
import Toast from 'components/common/Toast';

const Notification = ({ hasError, errorMessage }) => {
  return hasError && <Toast message={errorMessage} warning />;
};

Notification.propTypes = {
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default React.memo(Notification);
