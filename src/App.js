import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import DetailPage from './features/Todo/pages/DetailPage';
import ListPage from './features/Todo/pages/ListPage';
import AlbumFeature from './features/Album';
import userApi from './api/userApi';

function App() {
  useEffect(() => {
    const fetchUsers = async () => {
      const userList = await userApi.getAll();
      console.log(userList.data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <div>Header</div>
      <p>Todo</p>
      <p>
        <Link to="/todos-list-page">Todos List Page</Link>
      </p>
      <p>
        <Link to="/todos-detail-page">Todos Detail Page</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      <p>
        <Link to="">Home</Link>
      </p>
      <Routes>
        <Route path="/todos-list-page" Component={ListPage} />
        <Route path="/todos-detail-page" Component={DetailPage} />
        <Route path="/albums" Component={AlbumFeature} />
      </Routes>
      <div>
        <br />
        Footer
      </div>
    </div>
  );
}

export default App;
