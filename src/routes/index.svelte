<!-- <style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great success!</h1>

<figure>
	<img alt='Success Kid' src='successkid.jpg'>
	<figcaption>Have fun with Sapper!</figcaption>
</figure>

<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p> -->

<svelte:head>
  <title>Sapper project template</title>
  
</svelte:head>


<script context="module">
	export function preload() {
		return this.fetch(`dashboard.json`).then(r => r.json()).then(dashboard => {
			return { dashboard };
		});
	}
</script>

<script>
	export let dashboard;

</script>

<style>
	ul {
		line-height: 1.5;
	}
</style>


{@html dashboard[0].html}

<h1>dashboard</h1>

<ul>
	<!-- {#each posts as post}
		
		<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
	{/each} -->
</ul>