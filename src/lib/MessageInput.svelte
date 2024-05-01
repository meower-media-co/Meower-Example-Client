<script>
    import {client} from "$lib/stores";
    import Send from "../assets/images/Send.svg"

    export let loggedin;
</script>

<!--should this be a textarea?-->
<div class="message">
    {#if loggedin}
        <input placeholder="Meow meow?"/>
    {:else}
        <input placeholder="You need to login to send messages." disabled/>
    {/if}
    <button class="send">
        <img src={Send} alt="Send">
    </button>
</div>
<style>
    .message {
        display: inline-flex;
    }
    input {
        width: 675px;
        height: 25px;
    }
    .send {
        position: relative;
        width: 75px;
        height: 50px;
    }
</style>