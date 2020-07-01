import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/common/Card';
import { css, withStyles } from 'styles/withStyles';

const Modal = React.memo(({ styles, children }) => {
  return (
    <div {...css(styles.overlay)}>
      <div {...css(styles.wrapper)}>
        <div {...css(styles.container)}>
          <Card vertical={2} horizontal={2}>
            {children}
          </Card>
        </div>
      </div>
    </div>
  );
});

Modal.propTypes = {
  children: PropTypes.node,
};

export default withStyles(() => ({
  overlay: {
    position: 'fixed',
    zIndex: 9999,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  wrapper: {
    verticalAlign: 'middle',
  },
  container: {
    margin: '40px auto 0px',
    width: 700,
  },
}))(Modal);
