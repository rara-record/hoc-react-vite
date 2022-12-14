import React from 'react';

const HOC = (WrapperComponents, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: '',
    };

    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }

    render() {
      let { data, term } = this.state;
      let filteredData = data.filter((item) => {
        if (entity === 'users') {
          const { name } = item;
          return name.indexOf(term) > -1;
        }
        if (entity === 'todos') {
          const { title } = item;
          return title.indexOf(term) > -1;
        }
      });

      return (
        <div>
          <h2>{entity}</h2>
          <input
            text='text'
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrapperComponents data={filteredData} />
        </div>
      );
    }
  };
};

export default HOC;
