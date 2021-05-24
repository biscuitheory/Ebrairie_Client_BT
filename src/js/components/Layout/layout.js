import React from 'react';
import { useSelector } from 'react-redux';

import Header from './header';
import LoggedNav from './LoggedNav';

const Layout = ({ children }) => {
  const user = useSelector((state) => state.auth.values);
  return (
    <>
      <Header />
      <div>
        {!!user && <LoggedNav />}
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
