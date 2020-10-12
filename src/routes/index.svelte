
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
	
</style>

{@html dashboard[0].html}

{@html dashboard[1].html}
