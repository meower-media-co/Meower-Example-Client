<script>
    import Skeleton from "./Skeleton.svelte"
    export let postid
    
    async function getPostData(){
        // this isn't up to the RFC but in all honesty idk how to cache posts - taco
        let r = await fetch(`https://api.meower.org/posts?id=${postid}`) // `https://api.meower.org/posts?id=${postid}`
        if (r.ok) {
            return await r.json()
        }
        else {
            return {
                "error": true,
                "code":  r.status,
                "text":  r.statusText
            }
        }
    }
    
    let res = getPostData();
</script>

{#await res}
    <Skeleton username="Loading..." pfp="https://assets.meower.org/PFP/err.svg" content="Loading..." time="Loading..." />
{:then post}
    <Skeleton username={post.u} pfp="https://assets.meower.org/PFP/err.svg" content={post.p} time={post.t.e}/>
{:catch error}
    <Skeleton username="Failed to fetch" pfp="https://assets.meower.org/PFP/err.svg" content="Failed to fetch" time="Failed to fetch" />
{/await}