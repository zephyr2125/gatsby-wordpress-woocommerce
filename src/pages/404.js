import React from "react"
import Layout from "../layouts";
import Link from 'gatsby-link';

const NotFoundPage = () => (
	<Layout>
		<h1>NOT FOUND</h1>
		<Link to="/">Please try search</Link>
		<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
	</Layout>
)

export default NotFoundPage
