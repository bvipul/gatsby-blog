import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default () => (
	<Layout>
		<h1>About Me</h1>
		<p>This is my personal Website</p>
		<Link to="/">&larr; back to home</Link>
	</Layout>
);