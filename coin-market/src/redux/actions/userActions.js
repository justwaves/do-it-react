import createActions from './apiActions';

const { create } = createActions('users');

export function createUser(data, onComplete) {
  return create(
    data,
    {},
    {
      notification: { success: '회원 가입이 성공적으로 완료되었습니다.' },
      onSuccess: onComplete,
    },
  );
}
