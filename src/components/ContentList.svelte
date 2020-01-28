<script>
    export let content;
</script>

<style>
    .content-list {
		padding-left: 0;
		counter-reset: content-list;
	}

	.content-list .title {
		margin-bottom: 0.5em;
		font-size: 0.75em;
	}

	.content-list li::before {
		counter-increment: content-list;
		content: counter(content-list, decimal-leading-zero);
		font-family: monospace;
		font-size: 0.5em;
		vertical-align: top;
		margin-right: 0.25em;
	}

	@media screen and (min-width: 550px) {
		.content-list {
			text-align: center;
		}

		.content-list li {
			display: inline-block;
			margin-right: 1em;
		}
	}
</style>

<ul class="content-list">
    <p class="title">
        <slot>Untitled List</slot>
    </p>
    {#each content as item}
        <li><a rel='prefetch' href='blog/{item.slug}'>{ item.metadata.title }</a></li>
    {/each}
</ul>