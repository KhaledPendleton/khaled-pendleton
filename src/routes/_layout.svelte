<script>
	import Mouse from '../components/Mouse.svelte';
	import Nav from '../components/Nav.svelte';
</script>

<style>
	.wrapper {
		/* 1. Centers the content. */
		margin-right: auto; /* 1 */
		margin-left:  auto; /* 1 */
		padding-right: var(--spacing);
		padding-left:  var(--spacing);
	}
</style>

<div class="wrapper">
	<Nav />
	<slot></slot>
</div>
<Mouse />