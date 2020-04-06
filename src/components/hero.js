import React from 'react';
import styled from '@emotion/styled';
import { Link, graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const ImageBackground = styled(BackgroundImage)`
	background-image: url('/images/anas-alshanti.jpg');
	background-position: center center;
	background-size: cover;
	height: 50vh;
`;

const TextBox = styled('div')`
	background-image: linear-gradient(to top, #ddbbffdd 2rem, #ddbbff00);
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: flex-end;
	padding: 0 calc((100vw - 550px - 0.5rem) / 2) 2rem;
	width: 100%;
	margin-top:0;

	h1 {
		text-shadow: 1px 1px 3px #eeddff66;
		font-size: 2.25rem;
	}

	p,
	a {
		color: #222;
		margin-top: 0;
	}

	a {
		text-decoration: none;
		margin-top: 0.5rem;
	}
`;

const Hero = () => {
	const { image } = useStaticQuery(graphql`
		query {
			image: file(relativePath: { eq: "anas-alshanti.jpg" }) {
				sharp: childImageSharp {
					fluid {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);

	return (
		<ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
			<TextBox>
				<h1>Bvipul's Blog</h1>
				<p>
					Hello Everyone <Link to="/about">Learn about me</Link>
				</p>
			</TextBox>
		</ImageBackground>
	);
};

export default Hero;