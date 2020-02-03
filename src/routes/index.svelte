<svelte:head>
	<title>KHALED PENDLETON</title>
	<meta
		name="description"
		content="A New York based digital creative, specializing in web and mobile applications development, and typographic print design."
	>
	<!-- Open Graph tags -->
	<meta property="og:title" content="Khaled Pendleton: A design-driven web developer">
	<meta property="og:url" content="https://khaledpendleton.com">
	<meta property="og:type" content="website">
	<meta property="og:description" content="A New York based digital creative, specializing in web and mobile applications development, and typographic print design.">
	<meta property="og:image" content="https://khaledpendleton.com/images/me.jpg">
</svelte:head>

<script context="module">
	export async function preload({ params, query }) {
		const postsResponse = await this.fetch('blog.json');
		const posts = await postsResponse.json();

		const projectsResponse = await this.fetch('portfolio.json');
		const projects = await projectsResponse.json();
		
		return { posts, projects };
	}
</script>

<script>
	import ContentList from '../components/ContentList.svelte';
	export let posts;
	export let projects;
</script>

<section class="box atf">
	<p class="title">Hi! My name is Khaled (pronounced "Kah-leed"), and I'm a design-driven web developer from New York.</p>
</section>

<section class="box">
	<ContentList content={posts}>Blog Posts</ContentList>
</section>

<section class="box">
	<ContentList content={projects}>Projects</ContentList>
</section>