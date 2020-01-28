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
	export let post;
</script>

<header class="atf box">
	<h1 class="title">{ post.metadata.title }</h1>
</header>

<section class='box'>
	{ @html post.html }
</section>