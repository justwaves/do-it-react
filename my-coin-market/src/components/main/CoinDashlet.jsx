import React from 'react';
import PropTypes from 'prop-types';
import Heading from 'components/common/Heading';
import Button from 'components/common/Button';
import Card from 'components/common/Card';
import InlineList from 'components/common/InlineList';
import Text from 'components/common/Text';
import { Consumer as Modal } from 'components/modal/context';
import { TRADE_COIN_MODAL } from 'constants/modals';

const CoinDashlet = React.memo(({ name, priceLabel }) => {
  return (
    <Modal>
      {({ openModal }) => (
        <Card vertical={4} horizontal={4}>
          <Heading level={4}>
            {name}
            <Text>{priceLabel}</Text>
          </Heading>
          <InlineList spacingBetween={1}>
            <Button
              primary
              small
              onPress={() =>
                openModal(TRADE_COIN_MODAL, {
                  type: 'buy',
                  name,
                  price: priceLabel,
                })
              }
            >
              매도
            </Button>
            <Button
              small
              onPress={() =>
                openModal(TRADE_COIN_MODAL, {
                  type: 'sell',
                  name,
                  price: priceLabel,
                })
              }
            >
              매수
            </Button>
          </InlineList>
        </Card>
      )}
    </Modal>
  );
});

CoinDashlet.propTypes = {
  name: PropTypes.string,
  priceLabel: PropTypes.string,
};

export default CoinDashlet;
