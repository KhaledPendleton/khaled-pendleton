<script>
    import { spring } from 'svelte/motion';

    let coords = spring({ x: 50, y: 50 });
    let size = spring(15);
    
    function onMousemove(event) {
        coords.set({
            x: event.clientX,
            y: event.clientY 
        });
    }

    function onMousedown(event) {
        size.set(30);
    }

    function onMouseup(event) {
        size.set(15);
    }
</script>

<style>
    svg {
        display: none;
    }

    @media (pointer: fine) {
        svg {
            width: 100vw;
            height: 100vh;
            top: 0; left: 0;
            position: fixed;
            display: initial;
            pointer-events: none;
        }

        circle {
            fill: none;
            stroke-width: 2px;
            stroke: var(--dark-orange);
        }
    }
</style>

<svelte:window 
    on:mousemove={onMousemove}
    on:mousedown={onMousedown}
    on:mouseup={onMouseup}
/>

<svg>
	<circle cx={$coords.x} cy={$coords.y} r={$size} />
</svg>