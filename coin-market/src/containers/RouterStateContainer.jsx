/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import compose from 'recompose/compose';
import { setLocation } from 'redux/actions/routerActions';

class RouterState extends React.PureComponent {
  componentDidMount() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }

  componentDidUpdate() {
    const { setLocation, location } = this.props;
    setLocation(location);
  }

  render() {
    return null;
  }
}

RouterState.propTypes = {
  setLocation: PropTypes.func,
};

export default compose(connect(null, { setLocation }), withRouter)(RouterState);
