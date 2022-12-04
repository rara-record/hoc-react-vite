import { useEffect, useState } from 'react';

const data = [
  {
    id: 1,
    name: 'Tobe',
    tradeSection: '1',
    orderStatus: 1,
  },
  {
    id: 2,
    name: 'Jolee',
    tradeSection: '1',
    orderStatus: 3,
  },
  {
    id: 3,
    name: 'Muhammad',
    tradeSection: '1',
    orderStatus: 2,
  },
  {
    id: 4,
    name: 'Hubie',
    tradeSection: '1',
    orderStatus: 1,
  },
  {
    id: 5,
    name: 'Yoshiko',
    tradeSection: '1',
    orderStatus: 4,
  },
  {
    id: 6,
    name: 'Beatrix',
    tradeSection: '1',
    orderStatus: 2,
  },
  {
    id: 7,
    name: 'Jacob',
    tradeSection: '2',
    orderStatus: 3,
  },
  {
    id: 8,
    name: 'Koren',
    tradeSection: '2',
    orderStatus: 4,
  },
  {
    id: 9,
    name: 'Marissa',
    tradeSection: '2',
    orderStatus: 1,
  },
  {
    id: 10,
    name: 'Rufe',
    tradeSection: '2',
    orderStatus: 2,
  },
];

function Table() {
  const [filtered, setFiltered] = useState(data);
  const [tradeSection, setTradeSection] = useState('0');
  const [orderStatus, setOrderStatus] = useState(0);

  const tradeSectionSelect = Array.from(
    new Set(data.map((item) => item.tradeSection))
  );

  const orderStatusSelect = Array.from(
    new Set(data.map((item) => item.orderStatus))
  );

  const filterData = () => {
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

    setFiltered(filterList);
  };

  const render = filtered.map((trade) => (
    <div key={trade.id} style={{ padding: '10px' }}>
      <div>
        Name: <strong>name: {trade.name}</strong>
      </div>
      <div> tradeSection: {trade.tradeSection}</div>
      <div> orderStatus: {trade.orderStatus}</div>
    </div>
  ));

  useEffect(() => {
    filterData();
  }, [tradeSection, orderStatus]);

  return (
    <div>
      <div>
        <span>trade: </span>
        <select onChange={(e) => setTradeSection(e.target.value)}>
          <option value=''>0</option>
          {tradeSectionSelect.map((trade) => {
            return <option key={trade}>{trade}</option>;
          })}
        </select>
      </div>

      <div>
        <span>orderStatus: </span>
        <select onChange={(e) => setOrderStatus(e.target.value)}>
          <option value=''>0</option>
          {orderStatusSelect.map((trade) => {
            return <option key={trade}>{trade}</option>;
          })}
        </select>
      </div>

      {render}
      {/* {data.map((item) => {
          const { name, tradeSection, orderStatus, id } = item;
          return (
            <li key={id}>
              <div>
                Name: <strong>{name}</strong>
              </div>
              <div>tradeSection: {tradeSection}</div>
              <div>orderStatus: {orderStatus}</div>
            </li>
          );
        })} */}
      {data.length === 0 && <div>No employees matching the filter</div>}
    </div>
  );
}

export default Table;
