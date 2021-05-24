import React from 'react';

import Header from './header';
import LoggedNav from './LoggedNav';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <LoggedNav />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
