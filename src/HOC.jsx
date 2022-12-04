import React from 'react';

const HOC = (WrapperComponents, entity) => {
  return class extends Component {
    state = {
      data: [],
      term: '',
    };

    componentsDidMount() {
      const fetchUsers = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        this.state = { ...this.state, data: json };
      };
      fetchUsers();
    }

    render() {
      return <WrapperComponents />

    }
  };
};

export default HOC;
