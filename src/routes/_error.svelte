<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	pre {
		margin: auto;
		padding-right: var(--spacing);
		padding-left:  var(--spacing);
		font-family: monospace;
		font-size: 1.2em;
		font-weight: 400;
		border: 2px solid var(--dark-blue);
		line-height: 1.75em;
	}

	.center {
		text-align: center;
	}
</style>

<svelte:head>
	<title>{ status }: { error.message.toUpperCase() }</title>
</svelte:head>

<header class="atf box">
	<h1 class="title">{ status }: { error.message }</h1>
</header>

{#if dev && error.stack}
	<section class="box">
		<pre class="box">{error.stack}</pre>
	</section>
{/if}

<section class="box center">
	<a href=".">Take me home</a>
</section>