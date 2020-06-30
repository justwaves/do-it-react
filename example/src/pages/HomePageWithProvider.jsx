import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ButtonWithLoadingContext from '../components/button/ButtonWithLoadingContext';
import LoadingProvider from '../components/LoadingProvider';

const TableComponent = () => <ButtonWithLoadingContext label="버튼" />;

class HomePageWithProvider extends PureComponent {
  render() {
    return (
      <LoadingProvider>
        <TableComponent />
        <ButtonWithLoadingContext onPress={this.toggleLoading}>
          상태 변경
        </ButtonWithLoadingContext>
      </LoadingProvider>
    );
  }
}

HomePageWithProvider.childContextTypes = {
  loading: PropTypes.bool,
  setLoading: PropTypes.func,
};

export default HomePageWithProvider;
