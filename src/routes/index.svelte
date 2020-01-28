<svelte:head>
	<title>KHALED PENDLETON</title>
</svelte:head>

<script context="module">
	export async function preload({ params, query }) {
		const response = await this.fetch(`blog.json`);
		const posts = await response.json();
		return { posts };
	}
</script>

<script>
	import ContentList from '../components/ContentList.svelte';
	export let posts;
</script>

<section class="box atf">
	<p class="title">Hi! My name is Khaled (pronounced "Kah-leed"), and I'm a design-driven web developer from New York.</p>
</section>

<section class="box">
	<ContentList content={posts}>Blog Posts</ContentList>
</section>

<section class="box">
	<ContentList content={posts}>Projects</ContentList>
</section>