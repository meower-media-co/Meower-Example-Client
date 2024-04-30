<script>
    import { goto } from '$app/navigation'; 
</script>

<aside class="sidebar">
    <h2>You're not logged in!</h2>
    <button on:click={()=>{goto("/setup")}} class="redirectbutton">Login</button>
    <button class="redirectbutton">Create</button>
    <p>more stuff goes here?</p>
</aside>

<style>
    aside {
        float: right;
        color: var(--accent-color-white);
        text-align: center;
        position: relative;
        left: 300px;
        height: 275px;
        background-color: var(--background-sidebar);
        padding: 1em;
        border-radius: 1em;
    }
    
    button {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>