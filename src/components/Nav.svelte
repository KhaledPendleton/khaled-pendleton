<style>
    nav {
		display: flex;
        justify-content: space-between;
    }
    
    a {
        color: inherit;
    }

    .large-screen {
        display: none;
    }

    @media screen and (min-width: 500px) {
        .small-screen {
            display: none;
        }

        .large-screen {
            display: initial;
        }
    }
</style>

<nav class="box">
    <a href="https://twitter.com/khaledpendleton" target="_blank">
        <span class="small-screen">Tw</span>
        <span class="large-screen">Twitter</span>
    </a>
    <a href="https://instagram.com/khaledpendleton" target="_blank">
        <span class="small-screen">Ig</span>
        <span class="large-screen">Instagram</span>
    </a>
    <a href=".">KP</a>
    <a href="https://github.com/khaledpendleton" target="_blank">
        <span class="small-screen">Gh</span>
        <span class="large-screen">Github</span>
    </a>
    <a href="mailto:hi@khaledpendleton.com" target="_blank">
        <span class="small-screen">Em</span>
        <span class="large-screen">Email</span>
    </a>
</nav>