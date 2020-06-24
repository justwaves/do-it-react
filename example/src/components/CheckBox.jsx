import React, { useRef, useEffect } from 'react';
import withStyles, { css } from '../styles/withStyles';
import PropTypes from 'prop-types';

const CheckBox = ({
  errorMessage,
  label,
  children,
  styles,
  checked,
  name,
  onChange,
  autoFocus,
}) => {
  const inputRef = useRef();
  useEffect(() => {
    if (autoFocus) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  const handleClick = (e) => {
    onChange(name, e.target.checked);
  };

  return (
    <label>
      {label}
      <div>
        <input
          ref={inputRef}
          type="checkbox"
          checked={checked && 'checked'}
          onClick={handleClick}
        />
        {children}
      </div>
      {errorMessage && (
        <div>
          <span {...css(styles.errorText)}>{errorMessage}</span>
        </div>
      )}
    </label>
  );
};

CheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  autoFocus: false,
  checked: false,
  onChange: () => {},
};

export default withStyles(({ color, size }) => ({
  errorText: {
    fontSize: size.sm,
    color: color.error,
  },
}))(CheckBox);
