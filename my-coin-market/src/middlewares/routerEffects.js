import { setFilter } from 'store/modules/searchFilter';

function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = queryString.split('&');
  return chunks
    .map((chunk) => chunk.split('='))
    .reduce(
      (result, [key, value]) => ({
        ...result,
        [key]: value,
      }),
      {},
    );
}

export default (store) => (nextRunner) => (action) => {
  const { type, payload } = action;
  const result = nextRunner(action);
  if (type === 'appRouter/setLocation') {
    const { pathname, search } = payload;
    if (pathname === '/') {
      store.dispatch(setFilter(parse(search)));
    }
  }
  return result;
};
