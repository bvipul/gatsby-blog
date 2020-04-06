import React from 'react';
import Layout from '../components/layout.js';
import usePosts from '../hooks/use-posts.js';
import PostPreview from '../components/post-preview.js';
import Insta from '../components/insta.js';

import Hero from '../components/hero.js';

export default () => {
	const posts = usePosts();

	return (
		<React.Fragment>
			<Hero />
			<Layout>
				<h2>Read my Blog</h2>
				{
					posts.map(post => (
						<PostPreview key={post.slug} post={post} />
					))
				}
				<Insta />
			</Layout>
		</React.Fragment>
	);
}
