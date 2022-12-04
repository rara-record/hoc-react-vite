import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const json = await res.json();
      setUsers(json);
      console.log(users);
    };
    fetchUsers();
  }, []);

  return <div>UserList</div>;
};

export default UserList;
