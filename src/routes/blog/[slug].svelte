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
	export let post;
</script>

<svelte:head>
	<title>{ post.metadata.title }</title>
</svelte:head>

<h1>{ post.metadata.title }</h1>

<div class='content'>
	{ @html post.html }
</div>