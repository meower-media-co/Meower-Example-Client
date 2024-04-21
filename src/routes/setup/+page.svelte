<script lang="ts">
	import { onMount } from "svelte";
	import { writable } from "svelte/store";
	import { fade } from "svelte/transition";
	import * as mjs from "@meower-media/meower";
	import type { EventEmitter } from "events";
	import { goto } from '$app/navigation';

	let client = writable<mjs.Client & EventEmitter>(undefined);

	// Upon login set the user and stuff and go to home
	let isClient = false;
	let username = "";
	let pswd = "";
	let loginText: string = "";
	let loginStatus: string = "";

	onMount(() => {
		isClient = true;

		(async () => {
			(await import("../../lib/stores")).client.subscribe((c) => {
				client.set(c);
			});
			const err = (e: Error) => {
				loginText = e.message;
				loginStatus = e.message.split("Failed to login: ")[1];
			};
			$client.once("login", () => {
				loginText = "Logged in!";
				loginStatus = "ok";
				$client.off(".error", err);
				goto("/app");
			});
			$client.on(".error", err);
		})();
	});

	function login() {
		loginText = "Logging in..";
		$client.login(username, pswd);
	}
</script>

<svelte:head>
	<title>Meower - Login</title>
	<meta name="description" content="A social media platform" />
</svelte:head>

{#if isClient && loginStatus != "ok"}
	<div class="login">
		<h1>Meower</h1>
		<form>
			<input
				type="text"
				placeholder="Username"
				class="login-input text"
				bind:value={username}
				transition:fade
			/>
			<input
				type="password"
				placeholder="Password"
				class="login-input text"
				bind:value={pswd}
				transition:fade
			/>
			<button class="login-input text" on:click={login}>Log in</button>
			<!-- on:click={submit} -->
		</form>
		{#if loginText !== null}
			<p transition:fade>{loginText}</p>
		{/if}
		<small>Meower Example client.</small>
	</div>
{:else if !isClient}
	Loading Page...
{:else}
Something goes here maybe?
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
		margin-bottom: 0.2cm;
	}
</style>
