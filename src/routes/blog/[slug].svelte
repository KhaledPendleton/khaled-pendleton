<svelte:head>
	<title>{ page.title }</title>
	<meta name="description" content="{ page.description }">
	<!-- Open Graph tags -->
	<meta property="og:title" content="{ page.title }">
	<meta property="og:type" content="blog">
	<meta property="og:url" content="{ page.url }">
	<meta property="og:description" content="{ page.description }">
	<meta property="og:image" content="https://khaledpendleton.com/{ page.thumbnail.src }">
</svelte:head>

<script context="module">
	export async function preload({ params, query }) {
		const response = await this.fetch(`blog/${ params.slug }.json`);
		const post = await response.json();

		if (response.status === 200) {
			return { post };
		}

		this.error(response.status, post.message);
	}
</script>

<script>
	import Thumbnail from '../../components/Thumbnail.svelte';
	export let post;

	const page = {
		title: `KHALED PENDLETON | ${ post.metadata.title.toUpperCase() }`,
		description: post.metadata.description || 'A description-less blog post.',
		url: `https://khaledpendleton.com/blog/${post.slug}`,
		thumbnail: {
			src: `images/${ post.metadata.thumbnail }`,
			alt: post.metadata.caption
		}
	}
</script>

<style>
	.date {
		text-transform: uppercase;
		margin-bottom: 0;
	}

	@media screen and (min-width: 400px) {
		article {
			font-size: 1.25em;
			font-weight: 300;
		}
	}

	@media screen and (min-width: 550px) {
		article {
			font-size: 1.75em;
		}
	}
</style>

<header class="atf box">
	{#if post.metadata.thumbnail }
		<Thumbnail
			src="images/{ post.metadata.thumbnail }"
			alt="{ post.metadata.caption }"
		/>
	{/if}
	<h1 class="title">{ post.metadata.title }</h1>
	<p class="date">{ post.metadata.dateString }</p>
</header>

<section class='box'>
	<article>
		{ @html post.html }
	</article>
</section>