<script>
	import SocialsList from '../components/SocialsList.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<style>
	/* Should force sticky footer */
	main {
		flex: 1;
	}

	.wrapper {
		/* 1. Centers the content. */
		margin-right: auto; /* 1 */
		margin-left:  auto; /* 1 */
		padding-right: var(--spacing);
		padding-left:  var(--spacing);
	}
</style>

<header>
	<div class="wrapper">
		<Nav />
	</div>
</header>

<main>
	<div class="wrapper">
		<slot></slot>
	</div>
</main>

<footer>
	<div class="wrapper">
		<SocialsList />
	</div>
</footer>