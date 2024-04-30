<script>
    import {client} from "$lib/stores";


    export let loggedin;
</script>

<!--should this be a textarea?-->

{#if loggedin}
    <input placeholder="Meow meow?"/>
{:else}
    <input placeholder="You need to login to send messages." disabled/>
{/if}

<style>
    input {
        width: 700px;
    }
</style>