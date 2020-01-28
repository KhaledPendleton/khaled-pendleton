<svelte:head>
    <title>KHALED PENDLETON | PORTFOLIO</title>
</svelte:head>

<script context="module">
    export async function preload({ params, query }) {
        const response = await this.fetch('portfolio.json');
        const projects = await response.json();
        return { projects };
    }
</script>

<script>
    import ContentList from '../../components/ContentList.svelte';
    export let projects;
</script>

<section class="box">
    <ContentList content={projects}>Projects</ContentList>
</section>