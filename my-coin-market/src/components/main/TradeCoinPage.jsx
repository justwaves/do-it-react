/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import PropTypes from 'prop-types';
import Text from 'components/common/Text';
import Spacing from 'components/common/Spacing';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import InlineList from 'components/common/InlineList';
import Form from 'components/common/Form';
import { Consumer as Modal } from 'components/modal/context';

const TradeCoinPage = ({
  name,
  code,
  createTransaction,
  price,
  type,
  loading,
}) => {
  const handleSubmit = (values, closeModal) => {
    const formValues = {
      ...values,
      code,
      name,
    };
    createTransaction(formValues, closeModal);
  };

  const typeName = type === 'sell' ? '판매' : '구매';
  return (
    <Modal>
      {({ closeModal }) => (
        <Form
          onSubmit={(values) => handleSubmit(values, closeModal)}
          initValues={{ currentPrice: price }}
        >
          <Form.Consumer>
            {({ onChange, values }) => (
              <Spacing horizontal={4} vertical={8}>
                <Text xlarge bold>
                  {name} {typeName}
                </Text>
                <Spacing bottom={2}>
                  <Input
                    name="currentPrice"
                    label="금액"
                    value={values.currentPrice}
                    onChange={onChange}
                  />
                </Spacing>
                <Spacing bottom={2}>
                  <Input
                    name="amount"
                    label="수량"
                    value={values.amount}
                    onChange={onChange}
                  />
                </Spacing>
                <InlineList spacingBetween={1}>
                  <Button primary disabled={loading}>
                    {loading ? '거래 처리중' : typeName}
                  </Button>
                  <Button onPress={closeModal} disabled={loading}>
                    취소
                  </Button>
                </InlineList>
              </Spacing>
            )}
          </Form.Consumer>
        </Form>
      )}
    </Modal>
  );
};

TradeCoinPage.propTypes = {
  createTransaction: PropTypes.func,
};

export default React.memo(TradeCoinPage);
