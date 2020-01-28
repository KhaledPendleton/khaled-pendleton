<svelte:head>
	<title>KHALED PENDLETON | { project.metadata.title.toUpperCase() }</title>
</svelte:head>

<script context="module">
    export async function preload({ params, query }) {
        const response = await this.fetch(`portfolio/${ params.slug }.json`);
        const project = await response.json();

        if (response.status === 200) {
            return { project };
        }

        this.error(response.status, project.message);
    }
</script>

<script>
    export let project;
</script>

<header class="atf box">
	<h1 class="title">{ project.metadata.title }</h1>
</header>

<section class='box'>
	{ @html project.html }
</section>