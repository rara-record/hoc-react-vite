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
          const filterList = data.reduce((acc, cur) => {
            const tradeSectionCondition =
              cur.tradeSection === tradeSection || tradeSection === '0';

            console.log(tradeSection);
            const orderStatusCondition =
              cur.orderStatus === Number(orderStatus) || orderStatus === '0';

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
