<script lang="ts"> 
  import type { Post } from "@meower-media/meower/dist/api/posts";
  export let post: Post;
  import { onMount } from "svelte";
  import { client } from "$lib/stores"; // $lib/client
  import Love from "../assets/images/Love.svg"
  import Meow from "../assets/images/Meow.svg"
  import Reply from "../assets/images/Reply.svg"
  import NotImplemented from "../assets/images/NotImplemented.svg"
  const actions = [Love, Meow, Reply]
  const actionTexts = ["Love", "Meow", "Reply"]
  console.log("this exists now")
  let pfpUrl = "";
  onMount(() => {
      (async () => {
          const resp = await $client.api.users.get(post.u);
          //pfpUrl = resp.body.avatar == "" ? "https://assets.meower.org/PFP/" + resp.body.pfp_data + ".svg": "https://uploads.meower.org/icons/" + resp.body.avatar
          pfpUrl =  "https://uploads.meower.org/icons/" + resp.body.avatar
          /*
            {
                "_id": "insanetaco2000",
                "avatar": "6jeyd6kRjfI5bZYt7kSOpXSm",
                "avatar_color": "000000",
                "banned": false,
                "created": 1680731761,
                "error": false,
                "experiments": 0,
                "flags": 0,
                "last_seen": 1713721625,
                "lower_username": "insanetaco2000",
                "lvl": 0,
                "permissions": 8190,
                "pfp_data": 101,
                "quote": "Sometimes your potatos explode ¯\\_(ツ)_/¯",
                "uuid": "e03f6f29-ec59-491c-9c40-febfbb498c92"
            }
          */
      })()
  })
  
</script>


<div id="post">
  <div class="top">
      <img src={pfpUrl} alt={`${post.u}'s profile picture"`} class="pfp">
      <h2 class="name">{post.u}</h2>
  </div>
  <p class="content">{post.p}</p>
  <p class="time">{post.t.e}</p>
  
  <div class="buttons">
      {#each actions as icon, i}
          <button class={actionTexts[i]}>
              <img src={icon} alt={actionTexts[i]}>
          </button>
          <style>
              button {
                  width: fit-content;
                  height: fit-content;
                  color: rgba(0,0,0 / 0) !important;
              }
              img {
                width: 25.75px;
                height: 25.75px;
              }
          </style>
      {/each}
  </div>
  <!--wip-->
</div>

<style>
  div {
      background-color: #2a2a2a !important;
      width: fit-content;
      min-width: 47%;
      max-width: 47%;
      height: fit-content;
      padding-bottom: 1%;
      padding-top: 1%;
      text-align: left;
      border-radius: 1rem;
      margin-top: 25px;
  }
  .name {
      font-size: 35px;
      position: relative;
      left: 15px;

  }
  .pfp {
      width:65px;
      height: 65px;
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
      word-break: break-all;
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