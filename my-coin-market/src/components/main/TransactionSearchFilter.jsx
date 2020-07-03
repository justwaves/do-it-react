/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable dot-notation */
import React from 'react';
import { useHistory } from 'react-router-dom';

import InlineList from 'components/common/InlineList';
import Button from 'components/common/Button';
import Text from 'components/common/Text';
import Input from 'components/common/Input';
import Form from 'components/common/Form';
import Select, { Option } from 'components/common/Select';

const TransactionSearchFilter = React.memo(({ initValues }) => {
  const history = useHistory();
  const handleSubmit = (params) => {
    const querystring = Object.entries(params)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    history.push(`/?${querystring}`);
  };

  return (
    <Form onSubmit={handleSubmit} initValues={initValues}>
      <Form.Consumer>
        {({ onChange, values }) => (
          <InlineList spacingBetween={2} verticalAlign="bottom">
            <Text xlarge bold>
              검색
            </Text>
            <Select
              name="code"
              label="코인 코드"
              onChange={onChange}
              value={values['code']}
            >
              <Option label="선택해주세요" value="" />
              <Option label="비트코인(BTX)" value="BTX" />
              <Option label="이더리움(ETH)" value="ETH" />
              <Option label="두잇코인(DOIT)" value="DOIT" />
            </Select>
            <Input
              name="currentPrice_gte"
              label="최소 거래가"
              onChange={onChange}
              value={values['currentPrice_gte']}
            />
            <Input
              name="currentPrice_lte"
              label="최대 거래가"
              onChange={onChange}
              value={values['currentPrice_lte']}
            />
            <Button type="submit" primary>
              검색
            </Button>
          </InlineList>
        )}
      </Form.Consumer>
    </Form>
  );
});

export default TransactionSearchFilter;
