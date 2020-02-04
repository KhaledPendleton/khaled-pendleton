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
    @media (pointer: fine) {
        svg {
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
        }

        circle {
            fill: none;
            stroke: var(--dark-orange);
            stroke-width: 2px;
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