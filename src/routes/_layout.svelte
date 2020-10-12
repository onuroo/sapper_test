
<script context="module">
	export function preload() {
		return this.fetch(`header.json`).then(r => r.json()).then(header => {
			return { header };
		});
	}
</script>

<script>
	export let segment;

	export let header;
</script>

<style>
	main {
		position: relative;
		background-color: white;
		/* max-width: 56em;
		padding: 2em; */
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

{@html header[0].html}
<main>
	<slot></slot>
</main>