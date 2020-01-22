<script>
	export let segment;
</script>

<header>
	<div class="wrapper">
		<div>
			<a href=".">Khaled Pendleton</a>
			<h1>A design-driven web developer from New York</h1>
		</div>
	</div>
</header>

<main>
	<slot></slot>
</main>

<footer>
	<div class="wrapper">
		<div>
			<section>
				<h6>Social Media</h6>
				<ul>
					<li><a href="#">Tw</a></li>
					<li><a href="#">Ig</a></li>
					<li><a href="#">Gh</a></li>
				</ul>
			</section>

			<section>
				<h6>Email</h6>
				<a href="mailto:hi@khaledpendleton.com">hi@khaledpendleton.com</a>
			</section>
		</div>
	</div>
</footer>