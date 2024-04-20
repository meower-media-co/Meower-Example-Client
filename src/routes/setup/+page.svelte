<script lang="ts">
    import { onMount } from "svelte";
	import * as mjs from "@meower-media/meower"
	const client = new mjs.Client()

	// Upon login set the user and stuff and go to home
    let isClient = false;
	let username = ""
	let pswd = ""
	let loginStatus = null

	onMount(() => {
        isClient = true;
    })
	console.log(client.user)

	client.onLogin(() => {
		loginStatus = "Logged in!"
		console.log(client.user !== null && typeof client.user !== "undefined")
		console.log("yay logged in wow so cool")
	})

	async function submit() {
		loginStatus = "Logging in..."
		client.login(username,pswd)
		
	}
</script>

<svelte:head>
	<title>Meower - Login</title>
	<meta name="description" content="A social media platform" />
</svelte:head>

{#if isClient}
	<div class='login'>
		<h1>Meower</h1>
		<form>
			<input type='text' placeholder='Username' class='login-input text' bind:value={username}>
			<input type='password' placeholder='Password' class='login-input text' bind:value={pswd}>
			<button class='login-input text' on:click={submit}>Log in</button>
		</form>
		{#if loginStatus !== null}
			<p>{loginStatus}</p>
		{/if}
		<small>Meower Example client.</small> 
		
	</div>
{:else}
	Loading Page...
{/if}

<style>
	.login {
		display: flex;
		flex-direction: column;
		margin-left: auto;
		margin-right: auto;
		max-width: 500px;
	}

	.login-input {
		padding: 1em;
		margin-bottom: .2cm;
	}
</style>