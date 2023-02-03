import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Pagination from './Pagination';
import UserDetails from './UserDetails';

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);
  const [selectedUsers, setSelectedUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(res.data);
    };

    fetchUsers();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleClick = userId => {
    let newSelectedUsers;
    if (selectedUsers.includes(userId)) {
      newSelectedUsers = selectedUsers.filter(id => id !== userId);
    } else {
      newSelectedUsers = [...selectedUsers, userId];
    }
    setSelectedUsers(newSelectedUsers);
  };

  return (
    <>
      <div className="App">
        {currentUsers.map(user => (
          <div className="user--grid">
            <div className="user--block">
              <div className="user--name">
                <p className="title">NAME</p>
                <div>{user.name}</div>
              </div>
              <div className="user--contact">
                <p className="title">CONTACT</p>
                <div>{user.phone}</div>
              </div>
              <div className="user--city">
                <p className="title">STREET</p>
                <div>{user.address.street}</div>
              </div>
              <div className="user--state">
                <p className="title">STATE</p>
                <div>{user.address.city}</div>
              </div>
              <button
                className="view--user--details"
                onClick={() => handleClick(user.id)}
              >
                {selectedUsers.includes(user.id) ? 'Hide Details' : 'View Details'}
              </button>
            </div>
            {selectedUsers.includes(user.id) && <UserDetails user={user} />}
          </div>
        ))}
      </div>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
