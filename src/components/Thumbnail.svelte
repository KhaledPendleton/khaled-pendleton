<script>
    export let src;
    export let alt = 'No alt given';
</script>

<style>
    figure {
		margin: 0;
	}

	figcaption {
		font-size: 0.75em;
		text-transform: uppercase;
    }
    
    img {
        width: 100%;
		max-width: 100%;
		height: auto;
    }
</style>

<figure class="box">
    <img {src} {alt}>
    <figcaption>{ alt }</figcaption>
</figure>