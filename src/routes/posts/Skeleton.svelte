<script>
    export let username, pfp, content, time;
    import Love from "$lib/assets/Love.svg"
    import Meow from "$lib/assets/Meow.svg"
    import Reply from "$lib/assets/Reply.svg"
    const actions = [Love, Meow, Reply]
    const actionTexts = ["Love", "Meow", "Reply"]
</script>

<div id="post">
    <div class="top">
        <img src={pfp} alt="{username}'s profile picture" class="pfp">
        <h2 class="name">{username}</h2>
    </div>
    <p class="content">{content}</p>
    <p class="time">{time}</p>
    
    <div class="buttons">
        {#each actions as icon, i}
            <button class={actionTexts[i]}>
                <img src={icon} alt={actionTexts[i]}>
            </button>
            <style>
                button {
                    padding-left:15px;
                }
            </style>
        {/each}
    </div>
    <!--wip-->
</div>

<style>
    div {
        background-color: #2b2b2b !important;
        width: fit-content;
        min-width: 35%;
        max-width: 37%;
        height: fit-content;
        padding-bottom: 1%;
        padding-top: 1%;
        text-align: left;
        border-radius: 1rem;
    }
    .name {
        font-size: 35px;
        position: relative;
        left: 15px;

    }
    .pfp {
        width:65px;
    }
    .top {
        width: fit-content;
        position: relative;
        left: 2%;
        display: flex;
    }
    .content {
        max-width: 94%;
        overflow-wrap: break-all;
        font-size: 26px;
        position: relative;
        left: 15px
    }
    .buttons {
        position: relative;
        left: 5px;
        justify-content: 15px;
    }
</style>