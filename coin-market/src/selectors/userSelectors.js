import createSelectors from 'redux/actions/apiActions';

export const {
  createLoadingStateSelector: userCreateLoadingStateSelector,
} = createSelectors('users');
