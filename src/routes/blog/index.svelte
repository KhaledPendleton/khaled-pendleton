<svelte:head>
	<title>KHALED PENDLETON | BLOG</title>
</svelte:head>

<script context="module">
	export async function preload({ params, query }) {
		const response = await this.fetch(`blog.json`);
		const posts = await response.json();
		return { posts };
	}
</script>

<script>
	import ContentList from '../../components/ContentList.svelte';
	export let posts;
</script>

<section class="box">
	<ContentList content={posts}>Blog Posts</ContentList>
</section>