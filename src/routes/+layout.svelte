<script lang="ts">
	import './styles.css';
</script>

<div class="app">
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		--background-color: #101010;
		--color: #201900;
		--accent-color-white: #ffffff;
		--accent-color: #F9A535;
    	--hov-accent-color: #323439;
    	--hov-color: #4a4d56;

		background-color: var(--background-color);
    	color: var(--color);

		height: 100vh;
		width: 100vw;
	}

	main {
		position: relative;
		transform: translate(-50%,0);
		width: 50%;
		left: 50%;
	}
</style>