import React from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

FilterWrapper = (WrapperComponents, entity, entityStore) => {
  const select = useAppSelector(historyFilterSelector);

  return class extends React.Component {
    state = {
      data: [],
    };

    componentDidMount() {
      let { data } = this.state;

      let filteredData = data.filter((item) => {
        if (entity === 'OpenOrders' || 'Conditional') {
          const { tradeSectionCode } = item;
          tradeSectionCode.indexOf(select.tradeSectionCode) > -1;
        }

        if (entity === 'OrderHistory') {
          if (tradeSection === '0' && orderStatus === 0) return;

          const filterList = data.reduce((acc, cur) => {
            const tradeSectionCondition = tradeSection
              ? cur.tradeSection === tradeSection
              : cur;
            const orderStatusCondition = orderStatus
              ? cur.orderStatus === Number(orderStatus)
              : cur;

            if (tradeSectionCondition && orderStatusCondition) {
              acc.push(cur);
            }

            return acc;
          }, []);

          return filterList;
        }
      });

      dispatch(entityStore(filteredData));
    }

    render() {
      <WrapperComponents />;
    }
  };
};

export default FilterWrapper;
