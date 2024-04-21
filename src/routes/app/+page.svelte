<script lang="ts">
    import NotImplemented from '../../assets/images/NotImplemented.svg';
    import {client} from "$lib/stores";
    import type { Post as PostType } from "@meower-media/meower/dist/api/posts";
    import Post from "$lib/Post.svelte" ;
    import { onMount } from "svelte";
    import { goto } from '$app/navigation'; 

    let posts: PostType[] = []

    onMount(() => {
        if ($client.user === null || typeof $client.user === "undefined") {
            goto("/setup")
        }
        $client.onPost((username,content,origin,bridged) => {   
            console.log(username,content,origin,bridged);
            posts.reverse()
            posts.push(bridged.raw);
            posts.reverse()
            posts = posts;
        })
    })


    
</script>


<!-- <img src={NotImplemented} width="75%" alt="Placeholder"> -->



<svelte:head>
	<title>Meower - App</title>
	<meta name="description" content="A social media platform" />
</svelte:head>

{#each posts as post}
    <Post {post} />
{/each}