
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

	console.log('dashboard', dashboard);

</script>

<style>
	ul {
		line-height: 1.5;
	}
</style>


{@html dashboard[0].html}

{@html dashboard[1].html}

<h1>dashboard</h1>

<ul>
	<!-- {#each posts as post}
		
		<li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
	{/each} -->
</ul>