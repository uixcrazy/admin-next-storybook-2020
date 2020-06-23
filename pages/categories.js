import React, { useState } from 'react';
import cookie from 'js-cookie';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
// import { withAuthSync, authInitial } from '../helpers/utils/auth';
import Layout from '../app/Layout';
// import ActiveQuoteUI from '../components/QuoteDetails';

const Categories = () => {
  return (
    <div className="container mt-20">
      caterofy
    </div>
  );
};

Categories.Layout = Layout;

// Categories.getInitialProps = ctx => {
//   return authInitial(ctx, `/api/categories`);
// }

// export default withAuthSync(Categories);
export default Categories;