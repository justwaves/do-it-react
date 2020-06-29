import compose from 'recompose/compose';
import withLoading from '../hoc/withLoading';
import withState from 'recompose/withState';

const withLoadData = withState('isLoading', 'setIsLoading', false);

function Component() {
  return '완료 (컴포넌트 출력)';
}

const ComponentWithLoading = withLoading('로딩 중')(Component);
const ComponentWithLoadData = withLoadData(ComponentWithLoading);

const withLoadDataAndLoading = compose(withLoadData, withLoading('로딩 중'));
const ComponentWithLoadDataAndLoading = withLoadDataAndLoading(
  ComponentWithLoading,
);
