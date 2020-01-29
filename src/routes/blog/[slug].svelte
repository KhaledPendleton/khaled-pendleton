<svelte:head>
	<title>KHALED PENDLETON | { post.metadata.title.toUpperCase() }</title>
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
</script>

<style>
	.date {
		text-transform: uppercase;
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
			alt="{ post.metadata['thumbnail-alt'] }"
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