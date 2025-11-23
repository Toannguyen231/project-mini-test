// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './component/HomeMini/HomeMini.jsx';
import AdminPage from './component/Admin/component/AdminPage.jsx';
import ModalCreateUser from './component/Admin/component/content/ModalCreateUser.jsx';
import User from './component/Admin/component/User.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* layout chính: có NavBar + Outlet */}
        <Route path='/' element={<App />}>
          {/* /  */}
          <Route index element={<Home />} />

          {/* /admin */}
          <Route path='admin' element={<AdminPage />}>
            {/* /admin/createUser */}
            <Route path='user' element={<User />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
