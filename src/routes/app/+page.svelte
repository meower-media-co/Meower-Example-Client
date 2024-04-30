<script lang="ts">
    import NotImplemented from '../../assets/images/NotImplemented.svg';
    import {client} from "$lib/stores";
    import type { Post as PostType } from "@meower-media/meower/dist/api/posts";
    import Post from "$lib/Post.svelte" ;
    import { onMount } from "svelte";
    import { goto } from '$app/navigation'; 
    import LoginAlert from '$lib/LoginAlert.svelte';
    import MessageInput from '$lib/MessageInput.svelte';

    let posts: PostType[] = []
    let loggedin = false
    onMount(async () => {
        loggedin = !($client.user === null || typeof $client.user === "undefined")
        if (loggedin) {
            console.log($client.user)
        }
        let r = await fetch("https://api.meower.org/home?autoget")
        r = (await r.json()).autoget

        posts = r
        $client.onPost((username,content,origin,bridged) => {
            console.log(username,content,origin,bridged);
            posts.unshift(bridged.raw);
            posts = posts;
        })
    })
</script>


<!-- <img src={NotImplemented} width="75%" alt="Placeholder"> -->



<svelte:head>
	<title>Meower - App</title>
	<meta name="description" content="A social media platform" />
</svelte:head>

<div class="home">
    {#if !loggedin}
        <MessageInput loggedin={loggedin}/>
        <LoginAlert />
    {/if}


    {#each posts as post (post._id)}
        <Post {post} />
    {/each}
</div>