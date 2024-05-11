<script lang="ts">
    import NotImplemented from '../../assets/images/NotImplemented.svg';
    import {client} from "$lib/stores";
    import type { Post as PostType } from "@meower-media/meower/dist/api/posts";
    import { onMount } from "svelte";
    import { goto } from '$app/navigation'; 
    import Post from "$lib/Post.svelte" ;
    import LoginAlert from '$lib/LoginAlert.svelte';
    import PostList from '$lib/PostList.svelte';
    import Topbar from '$lib/Topbar.svelte';

    let loggedin = false;
</script>


<!-- <img src={NotImplemented} width="75%" alt="Placeholder"> -->



<svelte:head>
	<title>Meower - App</title>
	<meta name="description" content="A social media platform" />
</svelte:head>

<div class="home">
    <!-- <Topbar /> -->
    {#if !loggedin}
        <LoginAlert />
    {/if}

    <PostList loggedin={loggedin}/>



</div>

