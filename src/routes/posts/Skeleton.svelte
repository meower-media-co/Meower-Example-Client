<script>
    export let username, pfp, content, time;
</script>

<div>
    <h2>{username}</h2>
    <img src={pfp} alt="{username}'s profile picture">
    <p>{content}</p>
    <p>{time}</p>
    <!--words cannot describe how temporary this is, will be changed soon-->
</div>