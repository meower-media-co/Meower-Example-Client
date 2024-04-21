<script lang="ts">
    import { onMount } from "svelte";
	import { fade } from "svelte/transition"
	let client;

	// Upon login set the user and stuff and go to home
    let isClient = false;
	let username = ""
	let pswd = ""
	let loginStatus = null

	onMount(() => {
        isClient = true;
    })
	let login = function(a,b) {
		console.log("this should not run but it still does")
	}
	if (isClient) {
		client = import("../../lib/stores").client;
		
		client.onLogin(() => {
			//loginStatus = "Logged in!"
		})
		function loginError(e: Error) {
			client.off(".error",loginError)
		}

		login = async function(username: string,pswd: string) {
			client.login(username, pswd)
			client.on(".error", loginError)
		}
		login = login
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
			<input type='text' placeholder='Username' class='login-input text' bind:value={username} transition:fade>
			<input type='password' placeholder='Password' class='login-input text' bind:value={pswd} transition:fade>
			<button class='login-input text' on:click={login}>Log in</button> 
			<!-- on:click={submit} -->
		</form>
		{#if loginStatus !== null}
			<p transition:fade>{loginStatus}</p>
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