import React, { useState } from 'react';
import cookie from 'js-cookie';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';
// import { withAuthSync, authInitial } from '../helpers/utils/auth';
import Layout from '../app/Layout';
import CategoriesUI from '../app/Categories';

function Categories({ categories }) {
  return <CategoriesUI data={categories} />
};

Categories.Layout = Layout;

// Categories.getInitialProps = ctx => {
//   return authInitial(ctx, `/api/categories`);
// }

// export default withAuthSync(Categories);

// function Blog({ posts }) {
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li>{post.title}</li>
//       ))}
//     </ul>
//   )
// }

export async function getStaticProps() {
  const res = await fetch('http://localhost:8000/api/categories')
  const categories = await res.json()

  return {
    props: {
      categories,
    },
  }
}

export default Categories;


// function PreactStars({ stars }) {
//   return (
//     <div>
//       <p>Preact has {stars} ⭐</p>
//       <Link href="/">
//         <a>I bet Next.js has more stars (?)</a>
//       </Link>
//     </div>
//   )
// }

// export async function getStaticProps() {
//   const res = await fetch('https://api.github.com/repos/developit/preact')
//   const json = await res.json()

//   return {
//     props: {
//       stars: json.stargazers_count,
//     },
//   }
// }